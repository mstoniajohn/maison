import { Typography } from '@mui/material'
import React from 'react'
import ExternalMUILink from '../features/ExternalMUILink'
import { Button } from '../ui/button'
import ButtonCustom from '../features/ButtonCustom'

function PressButton({ link }: { link: string }) {
  return (
    <ButtonCustom href={link} size="large">
      READ NOW
    </ButtonCustom>
  )
}

export default PressButton
