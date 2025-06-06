import React from 'react'

import { Stack, Typography } from '@mui/material'
import Layout from '../../components/layout/Layout'

const BookPage: React.FC = () => {
  return (
    <Layout title="Book A Table">
      <Stack height="100%" px={2} mt={8} width="100%">
        <Typography variant="h1" align="center" color="primary">
          BOOK A TABLE AT MISS LILY'S
        </Typography>
        <div>
          <script
            async
            src="https://d183cnjuwjcs99.cloudfront.net/assets/widget/widget-iframe.min.js"
          ></script>
          <iframe
            src="https://eatapp.co/reserve/rock-da0f00?source=iframe"
            id="rock-da0f00"
            title="Eat Widget"
            height="100%"
            width="100%"
            className="mx-auto  h-screen w-[100%] overflow-hidden p-0 sm:w-full"
          />
        </div>
      </Stack>
    </Layout>
  )
}

export default BookPage
