import { Button } from '@mui/material'
import React from 'react'

const ButtonCustom = (props: any) => {
  const {
    children,
    size,
    variant,
    href,
    color,
    hoverColor,
    border,
    hoverBorder,
    onClick,
  } = props
  return (
    <Button
      href={href}
      variant={variant ? variant : 'contained'}
      disableElevation={true}
      size={size ? size : 'large'}
      color={color ? color : 'secondary'}
      sx={{
        borderRadius: '25px',
        fontWeight: 'bold',
        border: '2px solid transparent',
        color: 'white',
        '&:hover': {
          color: border ? border : 'secondary.main',
          backgroundColor: hoverColor ? hoverColor : 'white',
          border: `2px solid ${hoverBorder ? hoverBorder : '#E78FB3'}`,
        },
      }}
    >
      {children}
    </Button>
  )
}

export default ButtonCustom
