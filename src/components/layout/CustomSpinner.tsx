import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function CustomSpinner() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
