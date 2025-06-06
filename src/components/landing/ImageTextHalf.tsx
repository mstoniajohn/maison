import { Button, Link, Typography } from '@mui/material'
import Image from 'next/image'

import React from 'react'
import SlideDivs from '../features/SlideDivs'
import { featureSideImages } from '../features/data'
import GuideFloatingIcon from '../features/GuideFloatingIcon'
import { Map } from '@mui/icons-material'
import { useRouter } from 'next/router'

const ImageTextHalf = ({ text, link }: { text: string; link: string }) => {
  const router = useRouter()
  return (
    <>
      <div className="grid w-screen grid-cols-1 items-center gap-4 py-10 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div className="pl-4 pr-4 text-left sm:pl-32 sm:pr-8">
          <Image
            alt="Skylark"
            objectFit="contain"
            loading="lazy"
            height={100}
            width={400}
            src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1680300030/skylark/skylark-definition_f6p7hn.svg"
          />
          <Typography>
            {text}{' '}
            <Link href="http://rockhousefoundation.org/" underline="none">
              <span className="hover:text-green text-[#E088A8]">{link}</span>
            </Link>
          </Typography>
          {/* <div className="text-center">
            <Button
              variant="contained"
              onClick={() => router.push('/negril-guide')}
              color="primary"
              className="text-white rounded-full"
              disableElevation
            >
              <Map sx={{ mr: 1 }} />
              Negril Vacation Guide
            </Button>
          </div> */}
        </div>
        <div className="relative">
          <SlideDivs items={featureSideImages} height={280} />
        </div>
      </div>
    </>
  )
}

export default ImageTextHalf
