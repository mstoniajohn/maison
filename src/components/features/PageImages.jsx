import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import React from 'react'


const images = [
  {
    src:'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419195/skylark/Stay-263x185_vcwgao.jpg',
    title:'Stay',
    id:1,
    link:'/stay/guests'

  },
  {
    src:'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651416859/skylark/Play-263x185_m2yfj3.jpg',
    title:'Play',
    id:2,
    link:'/play'

  },
  {
    src:'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651416859/skylark/Eat-263x185.jpg_fnueqv.webp',
    title:'Eat',
    id:3,
    link:'/eat'

  },
  {
    src:'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651416859/skylark/Spa-263x185_dguuob.jpg',
    title:'Spa',
    id:4,
    link:'/spa'

  },
]

function PageImages() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      {
        images.map((image) =>(
          <Link href={image.link}>
            <div className="relative mb-3 ">
              <img
                className="hover h-full w-full flex-shrink-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={image.src}
                alt=""
              />

              <Box className=" hover:opacity-85 text-white absolute bottom-0 w-full bg-[#E088A8] p-2 text-center opacity-80 hover:bg-[#51BAB3]">
                <Typography color="white" variant="h5" sx={{ fontWeight: 'bold' }}>
                  {image.title}
                </Typography>
              </Box>
            </div>
          </Link>

        ))
      }
    
    </div>
  )
}

export default PageImages
