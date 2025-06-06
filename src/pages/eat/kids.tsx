import { Box, Container, Stack } from '@mui/material'
import React from 'react'

import { eatMenus } from '@/components/features/data'
import Layout from '../../components/layout/Layout'
import Title from '../../components/text/Title'

export default function Kids() {
  return (
    <Layout title="Skylark Kids Menu">
      <Container sx={{ alignItems: 'center', mt: 3 }}>
        <Title center>Kids Menu</Title>

        <Stack
          maxWidth={520}
          justifyContent="center"
          spacing={3}
          sx={{ mx: 'auto' }}
        >
          {eatMenus?.[3]?.images?.map((img) => (
            <img key={img} src={img} alt="Skylark Kids Menu" />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}
