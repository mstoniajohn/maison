import { Typography } from '@mui/material'
import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
  return <Typography variant="h2">{title}</Typography>
}
