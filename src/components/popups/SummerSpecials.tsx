import React, { useState } from 'react'

import { Stack, Typography } from '@mui/material'
import CustomDialog from './CustomDialog'
import PopUpDetailItem from './PopUpDetailItem'
import ButtonCustom from '../features/ButtonCustom'

function SummerSpecials() {
  const [open, setOpen] = useState(true)
  return (
    <CustomDialog
      open={open}
      handleClose={() => setOpen(false)}
      showCancelBtn={false}
      mt={0}
      color="text-gray-70"
      sx={{
        '& .MuiDialogContent-root': {
          padding: 2,
        },
      }}
    >
      <Typography align="center" variant="h2" color="primary">
        skylark specials
      </Typography>

      <div className=" grid gap-4 p-4">
        <PopUpDetailItem title="SKY-ROCK">
          <div className="text-gray-800">
            <Typography
              className="text-sm  font-semibold md:text-base"
              paddingBottom={0}
            >
              Get 30% off a 6-night stay <br />3 nights at Rockhouse, 3 nights
              at Skylark.
            </Typography>
            <Typography
              className="mb-1 text-sm  md:text-base"
              paddingBottom={0}
            >
              To begin booking, please fill out this form
            </Typography>
          </div>
          <ButtonCustom href="https://www.rockhouse.com/forms/skyrock">
            Book SKY-ROCK
          </ButtonCustom>
        </PopUpDetailItem>
        <PopUpDetailItem title="LONGER WEEKEND">
          <div className="text-gray-800">
            <Typography className="text-sm  md:text-base" paddingBottom={0}>
              <span className="font-semibold">
                Book a 4-night stay and one of the nights is free <br /> For
                longer stays, you'll receive a 25% discount
              </span>
              <br />
              Discounts automatically applied to online bookings
            </Typography>
          </div>
        </PopUpDetailItem>
        <PopUpDetailItem title="LAST MINUTE LOCAL">
          <div className="text-gray-800">
            <Typography className="text-sm  md:text-base" paddingBottom={0}>
              <span className="font-semibold">
                Jamaican residents book within 7 days of arrival <br /> and get
                50% off the room rate.
              </span>
            </Typography>
            <Typography
              className="mb-1 text-sm  md:text-base"
              paddingBottom={0}
            >
              For online booking, use promo code:{' '}
              <span className="font-bold">LASTMINUTE</span>
            </Typography>
          </div>
          <ButtonCustom href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732&_gl=1*1nliy1a*_ga*MTAxMjU0MDkxLjE3MzA1NDI0ODY.*_ga_Z2Z78V7EFB*czE3NDY1MzgxMTgkbzgyJGcxJHQxNzQ2NTM4MTI1JGo1MyRsMCRoMTg1NTQxMDg2NQ..">
            Book Specials
          </ButtonCustom>
        </PopUpDetailItem>
        <Typography className="text-center text-xs ">
          All offers valid for stays up until October 31st, 2025
        </Typography>
      </div>
    </CustomDialog>
  )
}

export default SummerSpecials
