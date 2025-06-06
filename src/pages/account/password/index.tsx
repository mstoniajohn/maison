import {
  LockClockOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Avatar,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { emailPasswordReset, reset } from '@/features/auth/authSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function index() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { isError, message, isSuccess } = useAppSelector((state) => state.auth)
  const handleSubmit = (event: any) => {
    // dispatch reset password email
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      emailPasswordReset({
        email: { email: data.get('email') },
      })
    )
    toast('Please check your email for a reset password link.')
  }
  React.useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    //  redirect after submitting form
    // if (isSuccess) {
    //   router.push('/')
    // }

    dispatch(reset())
  }, [isError, isSuccess, message, router, dispatch])

  return (
    <Layout title="Forget Password">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockClockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Send Reset Password Email
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
