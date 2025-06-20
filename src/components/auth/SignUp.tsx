import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Link from 'next/link'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { register, reset } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { CircularProgress, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function SignUp() {
  const dispatch = useAppDispatch()
  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  )
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [showRePassword, setShowRePassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowRePassword = () => setShowPassword((show) => !show)

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('password') !== data.get('re_password')) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        email: data.get('email'),
        username: data.get('email'),
        password: data.get('password'),
        re_password: data.get('re_password'),
        first_name: data.get('firstName'),
        last_name: data.get('lastName'),
      }
      // ts-ignore:
      dispatch(register({ user: userData }))
    }
  }
  React.useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      router.push('/')
      toast.success(
        'An activation email has been sent your email address. Please check your email'
      )
    }

    dispatch(reset())
  }, [isError, isSuccess, message, user, router, dispatch])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {isLoading && <CircularProgress />}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="re_password"
                label="Confirm Password"
                type={showRePassword ? 'text' : 'password'}
                id="re_password"
                autoComplete="new-password"
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/account/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
