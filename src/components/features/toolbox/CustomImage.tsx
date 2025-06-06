import { Box } from '@mui/material'
import Image from 'next/image'

interface CustomImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  height = 400,
  width = 400,
}) => {
  return (
    <div className="relative h-full">
      <Image
        // width="0"
        // height="0"
        // sizes="100vw"
        // className="h-auto w-full object-cover object-center"
        src={src}
        alt={alt || 'Skylark'}
        height={height}
        width={width}
        objectFit="cover"
        objectPosition={'center'}
      />
    </div>
  )
}

export default CustomImage

export const CustomImageCoPilot: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 584,
  height = 382,
}) => {
  return (
    <div
      className="relative  h-0 w-full"
      style={{ paddingBottom: `${(height / width) * 100}%` }}
    >
      <Image
        src={src}
        alt={alt || 'Skylark'}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  )
}

export function MyCustomImage({
  src,
  alt,
  width = 400,
  height = 400,
}: CustomImageProps) {
  return (
    <div
      className="relative h-full w-full"
      style={{ paddingBottom: `${(height / width) * 100}%` }}
    >
      <img
        src={src}
        alt={alt}
        className="h-96 w-screen object-cover object-center"
      />
    </div>
  )
}

// 'use client'

export function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality: number
}) {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const CustomImageCoPilot2: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 584,
  height = 382,
}) => {
  return (
    <div
      className="relative  h-0 w-full"
      style={{ paddingBottom: `${(height / width) * 100}%` }}
    >
      <Image
        src={src}
        alt={alt || 'Skylark'}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  )
}
