import React from 'react'
import Layout from '../../components/layout/Layout'
import BookingWidget from '@/components/features/BookingWidget'
import { Box } from '@mui/material'

export default function Book() {
  return (
    <Layout title="Book Your Stay at Rockhouse">
      <Box marginTop={10}>
        <BookingWidget />
      </Box>
      <iframe
        className="h-screen w-screen"
        src="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732"
      ></iframe>
    </Layout>
  )
}
