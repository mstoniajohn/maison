import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function BookButton() {
  const router = useRouter()
  return (
    <Box className="text-white relative flex h-auto w-screen flex-col items-center justify-center space-x-2 bg-blue p-3  lg:flex-row lg:space-x-5 lg:p-4">
      <Button
        variant="contained"
        disableElevation
        size="large"
        sx={{
          borderRadius: '25px',
          fontWeight: 'bold',
          border: '2px solid transparent',
          color: 'white',
          backgroundColor: 'secondary.main',
          '&:hover': {
            color: 'secondary.main',
            backgroundColor: 'white',
            border: `2px solid #E78FB3`,
          },
        }}
        href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.94892437.865820914.1680219873-1180761220.1680219873"
      >
        Book Now
      </Button>
    </Box>
  )
}
