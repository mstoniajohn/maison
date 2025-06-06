import { useRef, useState } from 'react'
import Typography from '@/components/typography/Typography'
import { NegrilGuideCategory } from '@/api/negrilGuide'
import CategoryImage from './features/CategoryImage'

interface CategoryListProps {
  selectedCategory: string | null
  categories: NegrilGuideCategory[] | undefined
  isLoading: boolean
  error: Error | null
  onCategoryClick: (categoryName: string) => void
}

export default function CategoryList({
  selectedCategory,
  categories,
  isLoading,
  error,
  onCategoryClick,
}: CategoryListProps) {
  const categoriesRef = useRef<HTMLDivElement>(null)
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0)

  const scrollCategories = () => {
    if (categoriesRef.current) {
      const container = categoriesRef.current
      const containerWidth = container.clientWidth
      const totalWidth = container.scrollWidth

      // Calculate next scroll position
      let nextPosition = currentScrollPosition + containerWidth
      if (nextPosition >= totalWidth) {
        nextPosition = 0
      }

      container.scrollTo({
        left: nextPosition,
        behavior: 'smooth',
      })
      setCurrentScrollPosition(nextPosition)
    }
  }

  if (isLoading) {
    return <div className="py-8 text-center">Loading categories...</div>
  }

  if (error) {
    return (
      <div className="py-8 text-center text-red-500">
        Error loading categories
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return <div className="py-8 text-center">No categories found</div>
  }

  const filteredCategories = categories.filter(
    (category) => category.name !== selectedCategory
  )

  return (
    <div className="relative my-6">
      <div
        ref={categoriesRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredCategories.map((category) => (
          <div
            key={category.pkid}
            className="mb-10 mr-4 min-w-[230px] cursor-pointer snap-start transition-transform hover:scale-105 lg:mr-7 lg:min-w-[350px]"
            onClick={() => onCategoryClick(category.name)}
          >
            <CategoryImage src={category.image} alt={category.name} />
            <Typography
              variant="h2"
              className="mt-2 font-sans text-[1rem] font-[500] text-blue lg:text-[1.2rem]"
            >
              {category.name}
            </Typography>
          </div>
        ))}
      </div>

      <button
        onClick={scrollCategories}
        className="bg-white absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full p-2 shadow-md"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
