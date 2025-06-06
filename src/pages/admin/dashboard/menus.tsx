import React, { useEffect } from 'react'

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '@/app/store'

import AdminLayout, { RenderRowImage } from '..'
import { Button, Stack, Typography } from '@mui/material'
import { Edit } from '@mui/icons-material'

import Image from 'next/image'
import CustomDialog from '@/components/layout/CustomDialog'

const Menus: React.FC = () => {
  const dispatch = useAppDispatch()
  // const { menus, statuses } = useAppSelector((state) => state.menu)
  const [edit, setEdit] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [menu, setMenu] = React.useState({})
  const [currentImage, setCurrentImage] = React.useState('')
  const [openDialog, setOpenDialog] = React.useState(false)
  const [pageSize, setPageSize] = React.useState(5)
  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
    setOpenDialog(true)
  }

  // useEffect(() => {
  //   if (statuses.fetchMenus === 'idle') dispatch(fetchMenus())
  // })

  const handleEdit = (row: any) => {
    setEdit(true)
    setTitle(row.slug)
    setMenu(row)
  }

  const columns: GridColDef[] = [
    { field: 'pkid', headerName: 'ID', width: 15 },
    { field: 'slug', headerName: 'ID', width: 15, hideable: true },

    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      renderCell: (params: any) => (
        <Typography variant="h6" color="primary">
          {params.value}
        </Typography>
      ),
    },

    {
      field: 'image1',
      headerName: 'Image1',
      width: 176,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image2',
      headerName: 'Image2',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image3',
      headerName: 'Image3',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image4',
      headerName: 'Image4',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image5',
      headerName: 'Image5',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image6',
      headerName: 'Image6',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image7',
      headerName: 'Image7',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },
    {
      field: 'image8',
      headerName: 'Image8',
      width: 175,
      renderCell: (params: any) => (
        <RenderRowImage params={params} handleImageClick={handleImageClick} />
      ),
    },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 175,
      renderCell: (params: any) => (
        <>
          <Button
            startIcon={<Edit />}
            onClick={() => handleEdit(params.row)}
            color="primary"
          >
            Edit
          </Button>
        </>
      ),
    },
  ]

  return (
    <AdminLayout>
      <div style={{ height: '90vh', width: '100%' }}>
        <Typography
          variant="h2"
          component={'h1'}
          color={'primary'}
          align="center"
        >
          Restaurant Menus
        </Typography>
        {/* <DataGrid
          rows={menus}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowHeight={() => 'auto'}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          autoHeight
        /> */}
      </div>
      {/* <CustomDialog open={edit} handleClose={() => setEdit(false)}>
        <Stack maxWidth={400} alignItems={'center'} justifyItems={'center'}>
          <MenuForm setEdit={setEdit} title={title} model="menu" menu={menu} />
        </Stack>
      </CustomDialog> */}
      <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)}>
        <Image
          src={currentImage}
          alt="Skylark"
          width={500}
          height={500}
          objectFit="contain"
        />
      </CustomDialog>
    </AdminLayout>
  )
}

export default Menus
