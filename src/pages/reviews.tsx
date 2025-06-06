import React from 'react'
import Layout from '../components/layout/Layout'
import Reviews from '@components/features/google/Reviews'
import { Container } from '@mui/material'

const ReviewsPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Reviews />
      </Container>
    </Layout>
  )
}

export default ReviewsPage
