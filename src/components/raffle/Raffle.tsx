import React, { useState } from 'react'

import CustomDialog from '../layout/CustomDialog'
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'

type RaffleProps = {
  extraComponent?: React.ReactNode
  btnLink: string
  src: string
  btnText: string
}

function Raffle(props: RaffleProps) {
  const [open, setOpen] = useState(true)
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <CustomDialog open={open} handleClose={() => setOpen(false)}>
      <Container maxWidth="xl" sx={{ mb: 2, mt: 5 }}>
        {/*  */}
        {props.extraComponent ? (
          <Stack direction="row" justifyContent="center" spacing={1.5} mb={2}>
            <Button
              size={matchesSM ? 'medium' : 'large'}
              variant="contained"
              target="_blank"
              sx={{
                backgroundColor: '#FED518',
                color: '#00458b',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FED518',
                  color: '#00458b',
                },
              }}
              href="https://www.rockhousefoundation.org/events/#:~:text=SEARCH%20%E2%80%A6-,CURRENT%20EVENTS,-SUMMER%20RAFFLE"
            >
              Enter the Raffle
            </Button>
            <Button
              size={matchesSM ? 'medium' : 'large'}
              variant="contained"
              sx={{
                backgroundColor: '#f180b2',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f180b2',
                  color: '#ffffff',
                  fontWeight: 'bold',
                },
              }}
              href="https://rockhousefoundation.networkforgood.com/events/57708-dinner-on-the-beach-with-chef-eric-adjepong"
            >
              Buy Tickets
            </Button>
          </Stack>
        ) : null}
        <Link
          target="_blank"
          href={props.btnLink}
          sx={{
            cursor: 'pointer',
          }}
        >
          <img
            src={props.src}
            className="xs:h-full w-full object-contain md:h-[65vh]"
          />
        </Link>
        <Button
          size={matchesSM ? 'medium' : 'large'}
          variant="contained"
          sx={{
            backgroundColor: '#f180b2',
            color: '#ffffff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#f180b2',
              color: '#ffffff',
              fontWeight: 'bold',
            },
          }}
          href={props.btnLink}
        >
          {props.btnText}
        </Button>
      </Container>
    </CustomDialog>
  )
}

export default Raffle
