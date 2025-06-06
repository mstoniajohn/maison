import { Container } from '@mui/material'
import React from 'react'

export default function PageContainer({
  children,
  mb = 'mb-4',
  mt = 'mt-10',
}: {
  children: React.ReactNode
  mb?: string
  mt?: string
}) {
  return (
    <Container className={`${mt} ${mb}`} maxWidth="xl">
      {children}
    </Container>
  )
}
