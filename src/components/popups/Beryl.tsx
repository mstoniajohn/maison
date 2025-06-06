import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ButtonCustom from '@/components/features/ButtonCustom'
import CustomDialog from './CustomDialog'
import Link from 'next/link'

export default function Beryl({
  btnUrl,
  src,
  btnText = 'Book Now',
}: {
  btnUrl?: string
  src?: string
  btnText?: string
}) {
  const [open, setOpen] = useState(true)
  // handle upload image to firebase

  return (
    <CustomDialog
      open={open}
      handleClose={() => setOpen(false)}
      showCancelBtn={false}
      sx={{
        maxWidth: 'sm',
        margin: 'auto',
        fontSize: '.50rem',
      }}
    >
      <Stack alignItems={'center'} rowGap={1} pb={1}>
        {/* <Link href={btnUrl}> */}
        <img className="z-50 max-h-[100px] object-contain" src={src} />
        <Stack alignItems={'center'}>
          <Typography fontWeight={600} align="center" fontSize={14}>
            HURRICANE BERYL UPDATE
          </Typography>
          <Typography align="center" fontSize={14}>
            We are relieved to report that there has been no damage at Skylark
            from the storm and the hotel is open and fully operational. All
            services at the hotel including all guest rooms, our guest
            reception, Miss Lily’s Restaurant, the beach, the Skylark Spa and
            boutique are open.
          </Typography>
          <Typography align="center" fontSize={14}>
            Our amazing team is safe, some reporting minor damage to their
            housing will be assisting them repair and recover.
          </Typography>
          <Typography align="center" fontSize={14}>
            Power and water have now been restored at Skylark and the main roads
            have been cleared. Cell services are back in some areas including
            Digicel. These services are currently in progress of being energized
            throughout the town and we expect each day to bring further
            restoration of services to our community.
          </Typography>
          <Typography align="center" fontSize={14}>
            Our regular phone lines are now working and you can contact the
            Front Desk at our main line{' '}
            <a href="tel:+1-876-957-4364" className="text-blue">
              +1(876)957-4364
            </a>{' '}
            or through our digital phone system at:{' '}
            <a className="text-blue" href="tel:+1-212-807-0868">
              +1(212)807-0868
            </a>{' '}
            and when the auto receptionist answers press the number 6.
          </Typography>
          <Typography align="center" fontSize={14}>
            Thank-you for the outpouring of love and support.{' '}
          </Typography>
        </Stack>
      </Stack>
    </CustomDialog>
  )
}
