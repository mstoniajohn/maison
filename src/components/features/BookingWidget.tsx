import { AccountCircle, NightShelter } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DateTime } from 'luxon'

const buildDates = (startDate: any, nights: any) => {
  const firstDay = DateTime.fromISO(startDate)
  const lastDay = DateTime.fromISO(startDate).plus({
    days: parseInt(nights) - 1,
  })
  return {
    start: {
      day: firstDay.day.toLocaleString(),
      month: firstDay.month.toLocaleString(),
      year: firstDay.year,
    },
    end: {
      day: lastDay.day.toLocaleString(),
      month: lastDay.month.toLocaleString(),
      year: lastDay.year,
    },
  }
}

const BookingWidget = () => {
  const [nights, setNights] = useState(1)
  const [adults, setAdults] = useState(1)
  const [date, setDate] = useState(DateTime.now())

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { end, start } = buildDates(date, nights)

    const newUrl = `https://reservations.verticalbooking.com/premium/index2.html?tot_camere=1&tot_adulti=${adults}&tot_bambini=0&gg=${
      start.day
    }&mm=${start.month}&aa=${String(start.year)}&ggf=${end.day}&mmf=${
      end.month
    }&aaf=${String(
      end.year
    )}&notti_1=${nights}&id_stile=19482&lingua_int=usa&id_albergo=25597&dc=7652&gps_latitude=&gps_longitude=&loyalty_provider_id=0&adulti1=${adults}&bambini1=0`

    window.location.assign(newUrl)
    setNights(1)
    setAdults(1)
    setDate(date)
    // notti_1 = 3 nights ?✅
    // tot_camere=1 rooms ? Add rooms maybe
  }

  return (
    <div className="text-white relative flex h-auto w-screen flex-col items-center justify-center space-x-2 bg-[#51BAB3] p-3  lg:flex-row lg:space-x-5 lg:p-4">
      <Box sx={{ direction: 'flex', alignItems: 'center', height: '100%' }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', paddingBottom: 0 }}
        >
          BOOK YOUR STAY
        </Typography>
      </Box>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Box noValidate component="form" onSubmit={onSubmit}>
          <Grid container columnSpacing={2}>
            <Grid item xs={6} lg={3}>
              <Stack direction="column">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Arrival Date
                </Typography>

                <DatePicker
                  value={date}
                  className="bg-gray-100 appearance-none focus:outline-none"
                  // className=" appearance-none focus:border-purple-500 focus:outline-none"

                  onChange={(value: any) => {
                    setDate(value)
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ backgroundColor: '#ffffff' }}
                      color="secondary"
                      {...params}
                    />
                  )}
                  disablePast
                />
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Stack direction="column">
                <Typography variant="h6" sx={{ fontWeight: 'bold', m: 0 }}>
                  Nights
                </Typography>

                <TextField
                  type="number"
                  // variant="filled"
                  color="secondary"
                  size="small"
                  id="filled-required"
                  className=" focus:border-purple-500 appearance-none focus:outline-none"
                  sx={{
                    backgroundColor: 'white',
                    // border: 'solid black 2px',
                  }}
                  InputProps={{
                    inputMode: 'numeric',

                    endAdornment: (
                      <InputAdornment position="start">
                        {' '}
                        <NightShelter />
                      </InputAdornment>
                    ),
                  }}
                  name="nights"
                  value={nights}
                  onChange={(e: any) => setNights(e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              {' '}
              <Stack direction="column">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Adults
                </Typography>
                <TextField
                  size="small"
                  type="number"
                  // variant="filled"
                  name="adults"
                  id="filled-required"
                  color="secondary"
                  sx={{
                    backgroundColor: 'white',
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  value={adults}
                  onChange={(e: any) => setAdults(e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation={true}
                type="submit"
                size="large"
                sx={{
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  fontSize: 20,
                  mt: 4,
                  color: 'white',
                  '&:hover': {
                    color: 'secondary.main',
                    borderColor: 'secondary.main',
                    backgroundColor: 'white',
                  },
                }}
              >
                BOOK NOW
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </div>
  )
}

export default BookingWidget
