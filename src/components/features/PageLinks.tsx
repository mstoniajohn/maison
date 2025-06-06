import Link from 'next/link'
import React from 'react'
import { Link as MUILink } from '@mui/material'

export default function PageLinks({
  url,
  text,
  bold = false,
  color,
  hoverColor,
}: {
  url: string
  text: string
  bold?: boolean
  color?: string
  hoverColor?: string
}) {
  return (
    // <Link href={url}>
    <MUILink
      component={Link}
      href={url}
      color="secondary"
      sx={{
        cursor: 'pointer',
        color: color ? color : 'secondary.main',
        fontWeight: bold ? 'bold' : 'normal',
        '&:hover': {
          color: hoverColor ? hoverColor : '#51BAB3',
          textDecoration: 'underline',
        },
      }}
      underline="none"
    >
      {text}
    </MUILink>
    // </Link>
  )
}
