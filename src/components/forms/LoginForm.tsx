import { Google } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { ThunkDispatch } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/features/users/userSlice'

export default function LoginForm() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const handleLogin = () => {
    dispatch(loginUser())
  }
  return (
    <Box className="flex items-center justify-center p-4">
      <Button
        variant="contained"
        onClick={handleLogin}
        color="primary"
        endIcon={<Google />}
        sx={{ color: 'white', fontWeight: 'bold' }}
      >
        Login With Google
      </Button>
    </Box>
  )
}
