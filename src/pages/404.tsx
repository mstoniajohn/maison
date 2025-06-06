import { Box, Typography } from '@mui/material'
import React from 'react'
import PageLinks from '@components/features/PageLinks'
import Layout from '../components/layout/Layout'
import PageContainer from '../components/PageContainer'
import Title from '../components/text/Title'

export default function PageNotFound() {
  return (
    <Layout title="404 Not Found">
      <PageContainer>
        <Box sx={{ mx: 'auto' }}>
          <Title>404 Page Not Found</Title>
          <Typography>
            Go back to where it's safe. <PageLinks url="/" text="Homepage" />
          </Typography>
        </Box>
      </PageContainer>
    </Layout>
  )
}
