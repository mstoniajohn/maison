import { Typography } from '@mui/material'
import React from 'react'

const H3Text = ({
  children,
  center,
  color = 'primary.main',
  className,
}: {
  children: React.ReactNode
  center?: boolean
  color?: string
  className?: string | undefined
}) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: color,
      }}
      textAlign={center ? 'center' : 'left'}
      className={className}
    >
      {children}
    </Typography>
  )
}
export default H3Text
