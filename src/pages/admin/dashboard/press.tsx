import React, { useEffect, useState } from 'react'

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/store'
// import { getDjangoPress, updatePress } from '../../../features/press/pressSlice'
import AdminLayout, { RenderRowImage } from '..'
import { Edit } from '@mui/icons-material'
import Delete from '@mui/icons-material/Delete'
import { isEmpty } from 'lodash'
import CustomDialog from '@/components/layout/CustomDialog'
import Image from 'next/image'
// import PressForm, { PressItem } from '../../../components/forms/PressForm'

const PressPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const pressItems = useAppSelector((state) => state.press.pressDjango)
  // const statuses = useAppSelector((state) => state.press.statuses)
  // useEffect(() => {
  //   if (statuses.fetchPressItems === 'idle') dispatch(getDjangoPress())
  // })

  console.log(pressItems)

  // const [selectedItem, setSelectedItem] = useState<PressItem>({
  //   title: '',
  //   date: '',
  //   link: '',
  //   // order: 0,
  //   image: null,
  //   text1: '',
  //   text2: '',
  //   sub_title: '',
  //   id: '',
  //   pkid: 0,
  // })
  const [openDialog, setOpenDialog] = useState(false)
  const [editedItem, setEditedItem] = useState({})
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [pressToDelete, setPressToDelete] = useState<any>(null)
  const [currentImage, setCurrentImage] = useState('')
  const [openImageDialog, setOpenImageDialog] = useState(false)
  const [imagePreview, setImagePreview] = useState('')
  const [addItem, setAddItem] = useState(false)
  const [editItem, setEditItem] = useState(false)
  const [pageSize, setPageSize] = useState(5)

  // useEffect(() => {
  //   if (selectedItem.image && typeof selectedItem.image !== 'string') {
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result as string)
  //     }
  //     reader.readAsDataURL(selectedItem.image)
  //   } else {
  //     setImagePreview('')
  //   }
  // }, [selectedItem.image])

  // const handleEditClick = (params: any) => {
  //   setEditItem(true)
  //   setSelectedItem(params.row)
  //   setOpenDialog(true)
  // }

  // const handleAddClick = () => {
  //   setSelectedItem({
  //     title: '',
  //     date: '',
  //     link: '',
  //     //   order: 0,
  //     image: null,
  //     text1: '',
  //     text2: '',
  //     sub_title: '',
  //     id: '',
  //     pkid: 0,
  //   })
  //   setAddItem(true)
  //   setOpenDialog(true)
  // }

  const handleDialogClose = () => {
    setOpenDialog(false)
    setAddItem(false)
    setEditItem(false)
  }

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
    setOpenImageDialog(true)
  }
  const handleSave = async (item: any) => {
    let formData = new FormData()
    for (const key in item) {
      // Append only if the property is not null or undefined
      if (item[key] != null) {
        if (key === 'image' && item[key] instanceof File) {
          // Append only if it's a file (for a new image upload)
          formData.append(key, item[key], item[key].name)
        } else if (key !== 'image') {
          // Append other fields normally
          formData.append(key, item[key])
        }
        // Note: If 'image' is not a file, it won't be appended,
        // which is what we want for non-upload scenarios
      }
    }
    if (addItem) {
      // dispatch(addPress({ item: formData, token: user?.access }))
    }
    // if (editItem) {
    //   await dispatch(
    //     updatePress({
    //       data: formData,
    //       pkid: item.pkid,
    //     })
    //   )
    // }
    setOpenDialog(false)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'hidden id', width: 100, hideable: true },
    { field: 'pkid', headerName: 'ID', width: 100 },
    { field: 'order', headerName: 'Order', width: 15 },
    {
      field: 'date',
      headerName: 'Date',
      width: 30,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      renderCell: (params: any) => (
        <Typography
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
          variant="h5"
          color={'primary'}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'sub_title',
      headerName: 'Subtitle',
      width: 200,
      renderCell: (params: any) => (
        <Typography
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
          variant="h6"
          color={'primary'}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'text1',
      headerName: 'Text 1',
      width: 300,
      renderCell: (params: any) => (
        <Typography
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
          variant="body1"
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'text2',
      headerName: 'Text 2',
      width: 300,
      renderCell: (params: any) => (
        <Typography
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
          variant="body1"
        >
          {params.value}
        </Typography>
      ),
    },

    {
      field: 'link',
      headerName: 'Link',
      width: 200,
      renderCell: (params: any) => (
        <Typography
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
        >
          <a href={params.value} target="_blank" rel="noreferrer">
            {params.value}
          </a>
        </Typography>
      ),
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 200,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      // renderCell: (params: any) => (
      //   <Stack>
      //     <Button
      //       startIcon={<Edit />}
      //       color="primary"
      //       onClick={() => handleEditClick(params)}
      //     >
      //       Edit
      //     </Button>

      //     <Button
      //       startIcon={<Delete />}
      //       onClick={() => {
      //         setPressToDelete(params.row)
      //         setConfirmDelete(true)
      //       }}
      //       color="error"
      //     >
      //       Delete
      //     </Button>
      //   </Stack>
      // ),
    },
  ]

  return (
    <AdminLayout>
      <Typography
        variant="h2"
        component={'h1'}
        color={'primary'}
        align="center"
      >
        Press Items
      </Typography>
      {/* <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Press Item
      </Button> */}

      <div style={{ height: 800, width: '100%' }}>
        {/* <DataGrid
          pageSize={pageSize}
          rows={pressItems}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          getRowHeight={() => 'auto'}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          autoHeight
        /> */}
      </div>
      {/* <CustomDialog
        open={openDialog}
        handleClose={handleDialogClose}
        dialogTitle={addItem ? 'Add Press Item' : 'Edit Press Item'}
      >
        <Stack minWidth={400} rowGap={2}>
          <PressForm
            selectedItem={selectedItem}
            setEditedItem={setEditedItem}
            onSave={handleSave}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '200px', marginBottom: '20px' }}
            />
          )}
        </Stack>
      </CustomDialog> */}
      <CustomDialog
        open={openImageDialog}
        handleClose={() => setOpenImageDialog(false)}
      >
        <Image
          src={currentImage}
          alt="Skylark"
          width={400}
          height={400}
          objectFit="contain"
        />
      </CustomDialog>
      <Dialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">Delete Room</DialogTitle>
        <DialogContent>
          <Typography marginBottom={2}>
            Are you sure you want to delete this room?
          </Typography>
          <Stack rowGap={2} direction={'row'} justifyContent={'space-between'}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (!isEmpty(pressToDelete)) {
                  //   dispatch(
                  //     deletePress({
                  //       pkid: pressToDelete?.pkid,
                  //       token: user?.access,
                  //     })
                  //   )
                }
                setConfirmDelete(false)
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setConfirmDelete(false)
                setPressToDelete(null)
              }}
            >
              No
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  )
}

export default PressPage
