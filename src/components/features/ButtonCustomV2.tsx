import { Button } from '@mui/material'
import React from 'react'

const ButtonCustomV2 = (props: any) => {
  const {
    children,
    href,
    size = 'large',
    variant = 'contained',
    color = 'secondary',
    hoverColor = 'white',
    border = 'secondary.main',
    hoverBorder = '#E78FB3',
    ...rest
  } = props
  return (
    <Button
      href={href}
      variant={variant}
      disableElevation
      size={size}
      color={color}
      sx={{
        // oval shaped button with borderRadius
        borderRadius: '25px',
        fontWeight: 'bold',
        border: '2px solid transparent',
        color: 'white',
        '&:hover': {
          color: border,
          backgroundColor: hoverColor,
          border: `2px solid ${hoverBorder}`,
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonCustomV2

/*
({
  children,
  href,
  onClick,
  size = 'large',
  variant = 'contained',
  color = 'secondary',
  hoverColor = 'white',
  border = 'secondary.main',
  hoverBorder = '#E78FB3',
  type = 'button',
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  variant?: 'outlined' | 'contained' | 'text'
  color?: 'secondary' | 'primary'
  hoverColor?: string
  border?: string
  hoverBorder?: string
  type?: 'reset' | 'button' | 'submit' | undefined
}
*/
