import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import NegrilGuideCategoryItem from './features/NegrilGuideCategoryItem'
import { NegrilGuideCategory } from '@/types/negrilGuide'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1401 },
    items: 4,
    // partialVisibilityGutter: 80,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1025 },
    items: 3,
    // partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    // partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    // partialVisibilityGutter: 80,
  },
}

function DesktopMultiItemCarousel({
  categories,
  onCategoryClick,
  selectedCategory,
}: {
  categories: NegrilGuideCategory[]
  onCategoryClick: (categoryName: string) => void
  selectedCategory?: string | null
}) {
  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.name !== selectedCategory)
    : categories
  return (
    <Carousel
      arrows
      responsive={responsive}
      infinite
      draggable
      swipeable
      rewind
      showDots={true}
      itemClass="carousel-item-padding-24-px"
    >
      {filteredCategories.map((category) => (
        <NegrilGuideCategoryItem
          key={category.pkid}
          category={category}
          onCategoryClick={() => onCategoryClick(category?.name)}
        />
      ))}
    </Carousel>
  )
}

export default DesktopMultiItemCarousel
