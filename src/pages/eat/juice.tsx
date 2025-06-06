import { Box, Container, Stack } from '@mui/material'
import React from 'react'

import { eatMenus } from '@/components/features/data'
import Layout from '../../components/layout/Layout'
import Title from '../../components/text/Title'

export default function Juice() {
  return (
    <Layout title="Skylark Juice Menu">
      <Container sx={{ alignItems: 'center', mt: 3 }}>
        <Title center>Juice Menu</Title>

        <Stack
          maxWidth={520}
          justifyContent="center"
          spacing={3}
          sx={{ mx: 'auto' }}
        >
          {eatMenus?.[8]?.images?.map((img) => (
            <img key={img} src={img} alt="Skylark Juice Menu" />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}
