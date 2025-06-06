import { Box, Container, Stack } from '@mui/material'
import React from 'react'

import { eatMenus } from '@/components/features/data'
import Layout from '../../components/layout/Layout'
import Title from '../../components/text/Title'

export default function BeachBites() {
  return (
    <Layout title="Skylark Beach Bites Menu">
      <Container sx={{ alignItems: 'center', mt: 3 }}>
        <Title center>Beach Beach Menu</Title>

        <Stack
          maxWidth={520}
          justifyContent="center"
          spacing={3}
          sx={{ mx: 'auto' }}
        >
          {eatMenus?.[5]?.images?.map((img) => (
            <img key={img} src={img} alt="Skylark Beach Bites Menu" />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}
