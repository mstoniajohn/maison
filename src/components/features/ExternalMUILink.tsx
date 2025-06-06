import { Link } from '@mui/material'
import React, { ReactNode } from 'react'

function ExternalMUILink({
  children,
  href,
  bold = false,
  center = false,
  underline,
  variant = 'body1',
  color,
  hoverColor,
  sx
}: {
  children: ReactNode
  href?: string
  bold?: boolean
  center?: boolean
  underline?: 'none' | 'hover' | 'always'
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'inherit'
    | undefined
  color?: string
  hoverColor?: string
  sx?: any
}) {
  return (
    <Link
      href={href}
      underline={underline ? underline : 'none'}
      variant={variant}
      sx={{
        ...sx,
        textDecoration: 'none',
        fontWeight: bold ? 'bold' : 'normal',
        textAlign: center ? 'center' : 'left',
        color: color ? color : 'secondary.main',
        marginRight:0.5,
        '&:hover': {
          color: hoverColor ? hoverColor : 'primary.main',
          textDecoration: 'underline',
        },
      }}
    >
      {children}
    </Link>
  )
}

export default ExternalMUILink
