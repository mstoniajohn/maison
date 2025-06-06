import Image from 'next/image'
import Layout from './Layout'

import { cn } from '@/lib/utils'
import VideoItem from '../videos/VideoItem'
import { ImageCarousel } from './ImageCarousel'

// IMAGES
type HeaderImageItem = {
  src: string
  name?: string
  mobileSrc?: string
}

const buildHeaderImagesComponents = (images: HeaderImageItem[]) => {
  const headerImages = images.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      height={820}
      width={1923}
      alt={image.name || 'Skylark'}
      priority={i === 0}
    />
  ))
  return headerImages
}

interface PageWrapperProps {
  children: React.ReactNode
  title: string
  images?: HeaderImageItem[] | undefined
  description?: string | undefined
  showGuideIcon?: boolean | undefined
  video?: string | undefined
  className?: string | undefined
  bgImage?: string | undefined
}

const PageWrapper = ({
  children,
  title,
  description,
  showGuideIcon,
  images,
  video,
  className,
  bgImage,
}: // video,
PageWrapperProps) => {
  // background-image: url('/images/rockhouse-restaurant.jpg');
  // add bg image option
  return (
    <Layout
      title={title}
      description={description}
      showGuideButton={showGuideIcon}
    >
      {images ? (
        <ImageCarousel imageComponents={buildHeaderImagesComponents(images)} />
      ) : (
        <></>
      )}
      {video && (
        <div>
          <VideoItem url={video} />
        </div>
      )}
      {/* {
        bgImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
 <div
        className={cn(
          'container relative mx-auto box-border pb-20 md:mt-3',
          className
        )}
      >
        {children}
      </div>
          </div>
        ):  <div
        className={cn(
          'container relative mx-auto box-border pb-20 md:mt-3',
          className
        )}
      >
        {children}
      </div>
      } */}
      <div
        className={cn(
          'container relative mx-auto box-border pb-20 md:mt-3',
          className
        )}
      >
        {children}
      </div>
    </Layout>
  )
}
export { buildHeaderImagesComponents }

export default PageWrapper
