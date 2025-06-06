import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

export default function Title({
  children,
  color = 'primary.main',
  component = 'h1',
  center = false,
  uppercase = false,
}: {
  children: ReactNode
  color?: string
  component?: string
  center?: boolean
  uppercase?: boolean
}) {
  return (
    <Typography
      textTransform={uppercase ? 'uppercase' : 'capitalize'}
      variant="h1"
      align={center ? 'center' : 'left'}
      sx={{
        color: color,
      }}
    >
      {children}
    </Typography>
  )
}
