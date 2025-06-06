import SkylarkDivider from '@/components/features/SkylarkDivider'
import FaqFormInput from '@/components/forms/FaqFormInput'
import Layout from '@/components/layout/Layout'
import { Container, Grid, Link, Typography, Box } from '@mui/material'

import React from 'react'

function Contact() {
  return (
    <Layout title="Contact Us">
      <Container className="mb-4 mt-4">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              color="primary"
              sx={{ mb: 2, mt: 4 }}
            >
              CONTACT US
            </Typography>
            <SkylarkDivider />
            <Typography>
              Skylark Negril Beach Resort <br />
              Norman Manley Blvd
              <br />
              Negril Jamaica W.I.
              <br />
              Reservations:{' '}
              <Link
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    fontWeight: 'bold',
                  },
                }}
                href="tel:1-212-807-0868"
                color="secondary"
              >
                +1 (212) 807-0868
              </Link>{' '}
              <br />
              Hotel:{' '}
              <Link
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    fontWeight: 'bold',
                  },
                }}
                href="tel:1-876-957-4364"
                color="secondary"
              >
                {' '}
                +1 (876) 957-4364
              </Link>{' '}
              <br />
              Email:{' '}
              <Link
                href="mailto:info@skylarknegril.com"
                color="secondary"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    fontWeight: 'bold',
                  },
                }}
              >
                info@skylarknegril.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1650206802/skylark/Front-Desk.jpg_jey9ib.webp"
              alt=""
              className="mx-auto w-full max-w-lg"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" color="primary">
              WRITE US
            </Typography>
            {/* <Divider
              sx={{
                padding: '2px',
                color: '#E088A8',
                marginTop: { md: 2, xs: 2 },
                marginBottom: { md: 3, xs: 2 },
              }}
            /> */}
            <SkylarkDivider />

            <Box>
              <FaqFormInput />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" color="primary">
              FIND ME
            </Typography>

            <SkylarkDivider />

            <Box className="overflow-x-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.8653941064385!2d-78.34006658511046!3d18.307762887533286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90cff9fa43be7%3A0xab8ad2b7f559b69e!2sSkylark%20Negril%20Beach%20Resort!5e0!3m2!1sen!2sus!4v1650215719708!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        {/* <Reviews /> */}
      </Container>
    </Layout>
  )
}

export default Contact
