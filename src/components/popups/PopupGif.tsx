import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ButtonCustom from '@/components/features/ButtonCustom'
import CustomDialog from './CustomDialog'
import Link from 'next/link'

export default function PopupGif({
  btnUrl,
  src,
  btnText = 'Book Now',
}: {
  btnUrl: string
  src: string
  btnText: string
}) {
  const [open, setOpen] = useState(true)
  // handle upload image to firebase

  return (
    <CustomDialog
      open={open}
      handleClose={() => setOpen(false)}
      showCancelBtn={false}
    >
      <Stack alignItems={'center'} rowGap={1} pb={1}>
        <Link href={btnUrl}>
          <img
            className="z-50 h-full max-h-[550px] w-full max-w-2xl object-contain"
            src={src}
          />
        </Link>
      </Stack>
    </CustomDialog>
  )
}
