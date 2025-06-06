import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Link as MUILink } from '@mui/material'
import PageLinks from './PageLinks'

const SlideDivs = ({ items, height }: { items: any; height?: number }) => {
  const [activePosition, setActivePosition] = useState(0)

  const updatePosition = (newPosition: any) => {
    if (newPosition < 0) {
      newPosition = items?.length - 1
    } else if (newPosition > items?.length - 1) {
      newPosition = 0
    }

    setActivePosition(newPosition)
  }
  return (
    <div className="relative mb-4 mt-4 w-full pb-4">
      <div
        onClick={() => updatePosition(activePosition - 1)}
        className="absolute left-0 h-full w-6 cursor-pointer bg-blue opacity-70 hover:bg-pink md:hidden"
      >
        <ArrowBackIosNew
          fontSize="medium"
          className="absolute top-1/2  text-pink hover:text-blue"
        />
      </div>
      <div className="block md:grid md:grid-cols-3 md:gap-3">
        {items?.map(
          ({
            id,
            img,
            url,
            title,
            text,
            urlText,
            video,
            it = null,
          }: {
            id: any
            img: string
            url: string
            title: string
            text: string
            urlText: string
            video?: string
            it: any
          }) => (
            <Card
              key={id}
              elevation={0}
              sx={{
                textAlign: { md: 'left', xs: 'center' },
              }}
              // <VideoPlayer url={video} />
              // <img className="object-contain" src={img} alt={title} />
              className={`${
                activePosition === id
                  ? 'block transition delay-100 duration-100 ease-linear'
                  : 'hidden md:block'
              } `}
            >
              {img.length > 0 ? (
                <CardMedia
                  sx={{
                    height: { xs: 270, md: height ? height : 390 },
                  }}
                  // component="iframe"
                  image={img}
                />
              ) : (
                <CardMedia
                  sx={{
                    height: { xs: 270, md: height ? height : 390 },
                  }}
                  component="iframe"
                  image={video}
                />
              )}

              {title && (
                <CardContent
                  sx={{
                    px: { xs: 4, md: 2 },
                  }}
                >
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{
                      textAlign: { md: 'left', xs: 'center' },
                      mt: 3,
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ textAlign: { md: 'left', xs: 'center' } }}>
                    {url === 'community' && (
                      <MUILink
                        component={Link}
                        href="/community"
                        color="secondary"
                        sx={{
                          textAlign: { md: 'left', xs: 'center' },
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'primary.main',
                            textDecoration: 'underline',
                          },
                        }}
                        underline="none"
                      >
                        The Rockhouse Foudation
                      </MUILink>
                    )}{' '}
                    {text} {it !== null && <i>{it}</i>}
                  </Typography>

                  <MUILink
                    component={Link}
                    href={url}
                    color="secondary"
                    sx={{
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textAlign: { xs: 'center', md: 'left' },
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'underline',
                      },
                    }}
                    underline="none"
                  >
                    {urlText}
                  </MUILink>
                </CardContent>
              )}
            </Card>
          )
        )}
      </div>
      <div
        onClick={() => updatePosition(activePosition + 1)}
        className="absolute top-0 right-0 h-full w-6 cursor-pointer bg-blue  opacity-70  hover:bg-pink md:hidden"
      >
        <ArrowForwardIos
          className="absolute top-1/2 text-pink hover:text-blue"
          fontSize="medium"
        />
      </div>
    </div>
  )
}

export default SlideDivs
