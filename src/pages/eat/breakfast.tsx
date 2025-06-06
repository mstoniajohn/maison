import { Container, Stack } from '@mui/material'
import React from 'react'

import { eatMenus } from '@/components/features/data'
import Layout from '../../components/layout/Layout'
import PageContainer from '../../components/PageContainer'
import Title from '../../components/text/Title'

export default function Breakfast() {
  return (
    <Layout title="Skylark Breakfast Menu">
      <Container sx={{ alignItems: 'center', mt: 3 }}>
        <Title center>Breakfast Menu</Title>
        <Stack
          maxWidth={520}
          justifyContent="center"
          spacing={3}
          sx={{ mx: 'auto' }}
        >
          {eatMenus?.[2]?.images?.map((img) => (
            <img key={img} src={img} alt="Skylark Breakfast Menu" />
          ))}
        </Stack>
      </Container>
    </Layout>
  )
}
