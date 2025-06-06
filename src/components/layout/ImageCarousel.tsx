import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { cn } from '@/lib/utils'

interface ImageCarouselProps {
  imageComponents: React.ReactNode[]
  carouselClassName?: string
}

export function ImageCarousel({
  imageComponents,
  carouselClassName,
}: ImageCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))
  const isSingle = imageComponents.length === 1

  return (
    <Carousel
      plugins={!isSingle ? [plugin.current] : ([] as any)}
      className={cn('w-full', carouselClassName)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageComponents.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative p-1">{item}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isSingle && <CarouselPrevious />}
      {!isSingle && <CarouselNext />}
    </Carousel>
  )
}
