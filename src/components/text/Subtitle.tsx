import { Typography } from '@mui/material'
import React from 'react'

const Subtitle = ({
  children,
  center,
  color = 'primary.main',
}: {
  children: React.ReactNode
  center?: boolean
  color?: string
}) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{
        color: color,
      }}
      textAlign={center ? 'center' : 'left'}
    >
      {children}
    </Typography>
  )
}
export default Subtitle
