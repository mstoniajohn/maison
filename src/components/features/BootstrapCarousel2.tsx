import { Box } from '@mui/material'
import React from 'react'

import { Carousel } from 'react-bootstrap'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { CustomImageCoPilot2 } from './toolbox/CustomImage'

const BootstrapCarousel2 = ({
  images,
  height,
}: {
  images: any
  height?: string | number
}) => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const greaterThanMid = useMediaQuery((theme: any) =>
    theme.breakpoints.up('md')
  )
  return (
    <Carousel
      indicators={images?.length === 1 ? false : true}
      controls={images?.length === 1 ? false : true}
    >
      {/* </Box> */}
      {images?.map(
        (
          {
            src,
            name,
            mobileSrc = '',
          }: {
            src: string
            name: string
            mobileSrc: string
          },
          i: number
        ) => (
          <Carousel.Item interval={4000} key={i}>
            <Box
              sx={{
                maxHeight: '700px',

                position: 'relative',
                width: '100%',
              }}
            >
              <a href={matchesSM ? mobileSrc || src : src}>
                <CustomImageCoPilot2
                  height={greaterThanMid ? 500 : 400}
                  src={src}
                  alt=""
                />
              </a>
            </Box>
          </Carousel.Item>
        )
      )}
    </Carousel>
  )
}

export default BootstrapCarousel2
