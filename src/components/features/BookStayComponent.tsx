import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Subtitle from '../text/Subtitle'

export default function BookStayComponent({
  title,
  image,
  text,
}: {
  title: string
  image: string
  text: string
}) {
  return (
    <Box>
      <Subtitle>{title}</Subtitle>
      <Stack>
        <img src={image} alt="" />
        <Typography variant="body1">{text}</Typography>
      </Stack>
    </Box>
  )
}
