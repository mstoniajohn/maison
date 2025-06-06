import { Button } from '@mui/material'
import React from 'react'

const ButtonCustom = ({
  size = 'large',
  variant = 'contained',
  children,
  href = '',
  color = 'secondary',
  hoverColor = 'white',
  border = 'secondary.main',
}) => {
  return (
    <Button
      href={href}
      variant={variant}
      disableElevation={true}
      target="_blank"
      size={size}
      color={color}
      sx={{
        borderRadius: '25px',
        fontWeight: 'bold',
        border: '2px solid transparent',
        color: 'white',
        '&:hover': {
          color: border,
          backgroundColor: hoverColor,
          border: `2px solid #E088A8`,
        },
      }}
    >
      {children}
    </Button>
  )
}

export default ButtonCustom
