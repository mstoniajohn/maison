import { Button, Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
import Layout from '../components/layout/Layout'
import NegrilPassword from '../utils/helpers'

export default function RequestVaction() {
  const router = useRouter()

  React.useEffect(() => {
    if (NegrilPassword.getPassword()) {
      router.push('/negril-guide')
    }
  }, [])
  return (
    <>
      <Layout title="Request Vaction Guide">
        <Script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
          onLoad={() => {
            console.log('Script has loaded')
          }}
        />
        <div id="ccform_tonia">
          <div
            className="ctct-inline-form  z-50 mx-auto  text-center"
            data-form-id="e6801b6c-2dd9-431c-8505-111976832682"
          ></div>
          <Box justifyContent="center" bgcolor="white" padding={4}>
            <Typography>
              Already have a password to the Negril Guide Page?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: '25px',
                fontWeight: 'bold',
                border: '2px solid transparent',
                color: 'white',
                '&:hover': {
                  color: 'secondary.main',
                  backgroundColor: '#ffffff',
                  border: `2px solid secondary.main`,
                },
              }}
              onClick={() => router.push('/negril-guide')}
            >
              Go To Negril Guide
            </Button>
          </Box>
        </div>
      </Layout>
    </>
  )
}
