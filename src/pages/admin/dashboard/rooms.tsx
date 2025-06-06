import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip,
  Stack,
  Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/app/store'
import {
  // deleteRoom,
  fetchRooms,
  setCurrentRoom,
  setOpenEditForm,
  setOpenRoomForm,
} from '@/features/room/roomSlice'
import AdminLayout, { RenderRowImage } from '..'
import Image from 'next/image'

import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid'
// import { DataGridPro } from '@mui/x-data-grid-pro'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CustomDialog from '@/components/layout/CustomDialog'
import AddOrEditRoom from '@/components/forms/AddOrEditRoom'

interface Room {
  pkid: number
  title?: string
  sub_title?: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  image6?: string
  description?: string
  slug?: string
  order?: number
  draft?: boolean
  link?: string
}

const RoomList = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {
    rooms,
    openRoomForm,
    openEditForm,
    currentRoom,
    fecthRooms: status,
  } = useAppSelector((state) => state.rooms)
  const { user, isLoading, isError, isSuccess, message, currentUser } =
    useAppSelector((state) => state.auth)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRooms())
    }
  })

  const [addRoom, setAddRoom] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [roomToDelete, setRoomToDelete] = useState<Room | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [pageSize, setPageSize] = useState<number>(5)
  const initialRows = rooms?.map((room) => ({
    id: room.id,
    title: room.title,
    sub_title: room.sub_title,
    image1: room?.image1,
    image2: room?.image2,
    image3: room?.image3,
    image4: room?.image4,
    image5: room?.image5,
    image6: room?.image6,
    description: room.description,
    pkid: room.pkid,
    slug: room.slug,
    order: room.order,
    draft: room.draft,
    link: room.link,
  }))

  const rows = initialRows

  const handleRoomAdd = () => {
    setAddRoom(true)
    dispatch(setCurrentRoom(null))
    dispatch(setOpenRoomForm(true))
  }

  const handleCloseDialog = () => {
    dispatch(setCurrentRoom(null))
    dispatch(setOpenRoomForm(false))
    dispatch(setOpenEditForm(false))
  }
  const handleRoomEdit = (roomId: any) => {
    const room = rooms.find((room) => room.id === roomId)
    dispatch(setCurrentRoom(room))
    dispatch(setOpenEditForm(true))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 10, hide: true },
    { field: 'slug', headerName: 'Slug', width: 15, hide: true },
    { field: 'pkid', headerName: 'ID', width: 20 },
    { field: 'order', headerName: 'Order', width: 15 },
    { field: 'title', headerName: 'Title', width: 150 },
    {
      field: 'sub_title',
      headerName: 'Sub Title',
      width: 300,
      renderCell: (params: any) => (
        <Tooltip
          title={
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: params?.value,
              }}
            />
          }
          placement="top"
          arrow
        >
          <div
            style={{
              cursor: 'pointer',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: params?.value,
              }}
            />
          </div>
        </Tooltip>
      ),
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      renderCell: (params: any) => (
        <Tooltip
          title={
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: params?.value,
              }}
            />
          }
          placement="top"
          arrow
        >
          <div
            style={{
              cursor: 'pointer',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <div
              className="text-xs"
              dangerouslySetInnerHTML={{
                __html: params?.value,
              }}
            />
          </div>
        </Tooltip>
      ),
    },
    {
      field: 'image1',
      headerName: 'Image',
      width: 150,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image2',
      headerName: 'Image 2',
      width: 150,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image3',
      headerName: 'Image 3',
      width: 150,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    { field: 'draft', headerName: 'Draft', width: 15 },
    {
      field: 'link',
      headerName: 'Booking Link',
      width: 150,
      renderCell: (params: any) => (
        <Typography
          sx={{
            // wrap text
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
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      renderCell: (params: any) => (
        <Stack>
          <Button
            startIcon={<EditIcon />}
            onClick={() => handleRoomEdit(params.id)}
            color="primary"
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              setRoomToDelete(params.row)
              setConfirmDelete(true)
            }}
            color="error"
          >
            Delete
          </Button>
        </Stack>
      ),
      width: 150,
    },
  ]

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
    setOpenDialog(true)
  }

  return (
    <AdminLayout>
      <div style={{ height: 800, width: '100%' }}>
        <Typography
          variant="h2"
          component={'h1'}
          color={'primary'}
          align="center"
        >
          Rooms
        </Typography>
        <Button
          startIcon={<AddIcon />}
          onClick={handleRoomAdd}
          color="primary"
          variant="contained"
          style={{ marginBottom: 16 }}
        >
          Add Room
        </Button>
        {/* <DataGrid
          pageSize={pageSize}
          rows={rows}
          columns={columns}
          getRowHeight={() => 'auto'}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          autoHeight
          components={{
            Toolbar: GridToolbar,
          }}
        /> */}
      </div>
      <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)}>
        <Image
          src={currentImage}
          alt="Room"
          width={400}
          height={400}
          objectFit="contain"
        />
      </CustomDialog>
      <CustomDialog open={openRoomForm} handleClose={handleCloseDialog}>
        <AddOrEditRoom create={addRoom} />
      </CustomDialog>
      <CustomDialog open={openEditForm} handleClose={handleCloseDialog}>
        <AddOrEditRoom />
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
              // onClick={() => {
              //   if (!isEmpty(roomToDelete)) {
              //     dispatch(
              //       deleteRoom({
              //         pkid: roomToDelete?.pkid,
              //         token: user?.access,
              //       })
              //     )
              //   }
              //   setConfirmDelete(false)
              // }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setConfirmDelete(false)
                setRoomToDelete(null)
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

export default RoomList
