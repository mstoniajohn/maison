'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Delete, Edit } from '@mui/icons-material'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Link,
  Stack,
} from '@mui/material'
import {
  deleteNegrilGuide,
  setCurrentCard,
} from '@/features/negril/negrilSlice'

import Image from 'next/image'
import NegrilForm from './NegrilForm'
import { useAppDispatch, useAppSelector } from '../../app/store'
import CustomImage from '@/components/features/toolbox/CustomImage'

interface Props {
  body: string
  sub?: string
  title?: string
  direction_url?: string
  website_url?: string
  category?: string
  sub_category?: string
  image?: string
  slug?: string
  likes?: any
  id?: any
  order: number
}

export default function NegrilCardItem(props: Props) {
  const {
    body,
    title,
    direction_url,
    website_url,
    image,
    sub_category,
    category,
    id,
    likes,
    order,
  } = props
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const [openConfirm, setOpenConfirm] = React.useState(false)

  const { user, currentUser } = useAppSelector((state: any) => state.auth)
  const [shouldDelete, setShouldDelete] = React.useState(false)
  const [confirmDelete, setConfirmDelete] = React.useState(false)

  const curr = {
    body,
    image,
    website_url,
    direction_url,
    sub_category,
    category,
    title,
    id,
    likes,
    order,
  }
  const handleOpen = () => {
    dispatch(setCurrentCard({ ...curr }))
    setOpen(true)
  }
  const handleClose = () => {
    dispatch(setCurrentCard(null))
    setOpen(false)
  }
  const handleOpenConfirm = () => {
    setOpenConfirm(true)
  }
  const handleCloseConfirm = () => {
    setOpenConfirm(false)
  }
  const handleDelete = async () => {
    await dispatch(deleteNegrilGuide({ id: id, token: user?.access }))
    handleCloseConfirm()
  }

  return (
    <>
      <Box
        marginBottom={2}
        className="relative flex flex-col justify-between shadow-lg"
      >
        <Box sx={{ position: 'relative' }}>
          <Link href={website_url}>
            <CustomImage src={image || '/default-600x450.jpg'} alt={title} />
          </Link>
          {currentUser && currentUser?.is_admin && (
            <Stack
              direction="row"
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}
            >
              <IconButton
                sx={{
                  color: 'secondary.dark',
                }}
                onClick={() => handleOpen()}
              >
                <Edit
                  fontSize="small"
                  sx={{ color: 'white' }}
                  className=" shadow-2xl shadow-gray-200"
                />
              </IconButton>
              <IconButton
                sx={{
                  color: 'secondary.dark',
                }}
                onClick={() => handleOpenConfirm()}
              >
                <Delete
                  fontSize="small"
                  color="error"
                  className="shadow-2xl shadow-gray-200"
                />
              </IconButton>
            </Stack>
          )}
        </Box>

        <Box
          className="mb-auto p-3"
          component="a"
          href={website_url}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
              color: 'inherit',
            },
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <p className="mb-2">{body}</p>
        </Box>

        <Box className="flex justify-between p-3">
          <Button
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary.main',
              },
              fontSize: '1rem',
            }}
            size="small"
            href={website_url}
            color="secondary"
          >
            View Website
          </Button>
          {!!direction_url && (
            <Button
              sx={{
                fontWeight: 'bold',
                marginLeft: 'auto',
                '&:hover': {
                  color: 'primary.main',
                },
                fontSize: '1rem',
              }}
              size="small"
              href={direction_url}
              color="secondary"
            >
              Get Directions
            </Button>
          )}
        </Box>
      </Box>
      <NegrilForm
        edit={true}
        open={open}
        handleClose={handleClose}
        title={title}
        id={id}
      />
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this entry?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="error">
            Cancel
          </Button>
          <Button onClick={handleDelete} autoFocus color="success">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
