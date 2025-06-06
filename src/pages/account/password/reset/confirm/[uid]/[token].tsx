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
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { resetPassword } from '@/features/auth/authSlice'
import { toast } from 'react-toastify'

export default function index() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { uid, token } = router.query
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)
  const { isError, message, isSuccess, user } = useAppSelector(
    (state) => state.auth
  )

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleClickShowRePassword = () => setShowRePassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  const handleMouseDownRePassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const dataObj = {
      uid: uid,
      token: token,
      new_password: data.get('new_password'),
      re_new_password: data.get('re_new_password'),
    }
    dispatch(resetPassword({ data: { ...dataObj } }))
    toast('Password updated successfully.')
  }
  React.useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      router.push('/')
    }

    // dispatch(reset())
  }, [isError, isSuccess, message, router, dispatch])

  return (
    <Layout title="Reset Password">
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
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="new_password"
            label="New Password"
            type={showPassword ? 'text' : 'password'}
            id="new_password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="re_new_password"
            label="Confirm Password"
            type={showRePassword ? 'text' : 'password'}
            id="re_new_password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRePassword}
                  onMouseDown={handleMouseDownRePassword}
                >
                  {showRePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
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
