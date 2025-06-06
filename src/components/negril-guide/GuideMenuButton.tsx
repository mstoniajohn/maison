import { Button } from '@mui/material'
import React from 'react'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'

function GuideMenuButton({ name, link }: { name: string; link: string }) {
  return (
    <ButtonCustomV2
      color="primary"
      sx={{
        alignContent: 'center',
      }}
      href={link}
    >
      {name}
    </ButtonCustomV2>
  )
}

export default GuideMenuButton
