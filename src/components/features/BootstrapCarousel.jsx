import { Box } from '@mui/material'
import React from 'react'

import { Carousel } from 'react-bootstrap'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import HeaderImage from '../layout/images/HeaderImage'

const BootstrapCarousel = ({ images }) => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Carousel
      indicators={images?.length === 1 ? false : true}
      controls={images?.length === 1 ? false : true}
    >
      {/* </Box> */}
      {images?.map(({ src, name, mobileSrc = '' }, i) => (
        <Carousel.Item interval={4000} key={i}>
          <Box
            className={`xs:max-h-[400px] relative 
                 w-full sm:max-h-[670px]
              `}
          >
            <HeaderImage src={src} alt={name} />
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BootstrapCarousel
