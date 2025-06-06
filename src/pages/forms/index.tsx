import { Box, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import Layout from '../../components/layout/Layout'
import PageContainer from '../../components/PageContainer'
import Title from '../../components/text/Title'

export default function index() {
  const router = useRouter()
  return (
    <Layout title="Skylark Negril Forms">
      <PageContainer>
        <Title uppercase center>
          Skylark Reservation Forms
        </Title>

        <Box maxWidth={400} mx="auto" paddingBottom={3}>
          <SkylarkDivider />
        </Box>
        <Stack direction="row" spacing={2} justifyContent="Center">
          <Stack spacing={2}>
            <ButtonCustomV2 href="https://skylarknegril.com/forms/dinner">
              Dinner
            </ButtonCustomV2>
            <ButtonCustomV2
              href="https://skylarknegril.com/forms/spa"
              // onClick={() => router.push('forms/spa')}
            >
              Spa
            </ButtonCustomV2>
            <ButtonCustomV2
              href="https://skylarknegril.com/forms/weddings"
              // onClick={() => router.push('forms/weddings')}
            >
              Weddings
            </ButtonCustomV2>
          </Stack>
          <Stack spacing={2}>
            <ButtonCustomV2
              href="https://skylarknegril.com/forms/romance"
              // onClick={() => router.push('forms/romance')}
            >
              Romance
            </ButtonCustomV2>
            <ButtonCustomV2
              href="https://skylarknegril.com/forms/kenny-tours"
              // onClick={() => router.push('forms/kenny-tours')}
            >
              Kenny Tours
            </ButtonCustomV2>
            <ButtonCustomV2
              href="https://skylarknegril.com/forms/club-mobay"
              // onClick={() => router.push('forms/club-mobay')}
            >
              Club Mobay
            </ButtonCustomV2>
          </Stack>
        </Stack>
      </PageContainer>
    </Layout>
  )
}
