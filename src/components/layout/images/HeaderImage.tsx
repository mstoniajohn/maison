import useWindowSize from '@/hooks/useWindowSize'
import theme from '@/styles/theme'
import { useMediaQuery } from '@mui/system'
import Image, { ImageProps } from 'next/image'
import React from 'react'

interface HeaderImageProps extends ImageProps {
  mobileSrc?: string
}

function HeaderImage(props: HeaderImageProps) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { width } = useWindowSize()

  const { mobileSrc, src, ...rest } = props
  return (
    <Image
      src={isMobile && mobileSrc ? mobileSrc : src}
      {...rest}
      objectFit="cover"
      height={1365}
      width={2048}
      className={`h-[350px] w-full object-cover object-center sm:h-[500px] md:h-[670px]`}
      priority
    />
  )
}

export default HeaderImage
