import React, { useState } from 'react'
import BootstrapCarousel from './BootstrapCarousel'

const delay = 2500

const Hero = ({ images }: { images: string[] }) => {
  // takes in images as props
  const [index, setIndex] = useState(0) // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length) // increases index by 1
  }

  const slideLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(images.length - 1) // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex)
    }
  }

  const timeoutRef: any = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="relative">
      <BootstrapCarousel images={images} />
    </div>
  )
}

export default Hero
