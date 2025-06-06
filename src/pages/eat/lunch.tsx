import { Box, Container, Stack } from '@mui/material'
import React from 'react'

import { eatMenus } from '@/components/features/data'
import Layout from '../../components/layout/Layout'
import Title from '../../components/text/Title'

export default function Lunch() {
  return (
    <Layout title="Skylark Lunch Menu">
      <Container sx={{ alignItems: 'center', mt: 3 }}>
        <Title center>Lunch Menu</Title>

        <Stack
          maxWidth={520}
          justifyContent="center"
          spacing={3}
          sx={{ mx: 'auto' }}
        >
          {eatMenus?.[1]?.images?.map((img) => (
            <img key={img} src={img} alt="Skylark Lunch Menu" />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}
