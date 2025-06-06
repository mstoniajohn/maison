import React, { useEffect } from 'react'
import Typography from '@/components/typography/Typography'
import CategoryImage from '@/components/negril-guide/features/CategoryImage'
import type { NegrilGuideCategory } from '@/types/negrilGuide'
import { InstagramEmbed } from 'react-social-media-embed'
import type { NegrilGuideArticle } from '@/api/negrilGuide'

interface CategoryContentProps {
  selectedCategory: string | null
  categories: NegrilGuideCategory[] | undefined
  articles: NegrilGuideArticle[] | undefined
  articlesLoading: boolean
  articlesError: Error | null
  isAdmin: boolean
  onBackClick: () => void
}

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 w-32 rounded bg-gray-200"></div>
    <div className="h-64 rounded bg-gray-200"></div>
    <div className="h-8 w-48 rounded bg-gray-200"></div>
    <div className="space-y-2">
      <div className="h-4 w-full rounded bg-gray-200"></div>
      <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      <div className="h-4 w-4/6 rounded bg-gray-200"></div>
      <div className="h-4 w-3/6 rounded bg-gray-200"></div>
    </div>
  </div>
)

const CategoryContent: React.FC<CategoryContentProps> = ({
  selectedCategory,
  categories,
  articles,
  articlesLoading,
  articlesError,
  isAdmin,
  onBackClick,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [selectedCategory])
  if (!selectedCategory || !categories) return null

  const category = categories.find((cat) => cat.name === selectedCategory)

  if (articlesLoading) {
    return (
      <div className="space-y-4">
        <button
          onClick={onBackClick}
          className="text-blue-600 mb-4 flex items-center hover:underline"
        >
          <span>← Back to all categories</span>
        </button>
        <SkeletonLoader />
      </div>
    )
  }

  if (articlesError) {
    return (
      <div className="space-y-4">
        <button
          onClick={onBackClick}
          className="text-blue-600 mb-4 flex items-center hover:underline"
        >
          <span>← Back to all categories</span>
        </button>

        <div className="py-8 text-center text-red-500">
          Error loading article content
        </div>
      </div>
    )
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="space-y-4">
        <button
          onClick={onBackClick}
          className="text-blue-600 mb-4 flex items-center hover:underline"
        >
          <span>← Back to all categories</span>
        </button>

        <div className="py-8 text-center">
          No article found for this category
        </div>
      </div>
    )
  }

  // Get the first article (assuming there's only one per category)
  const article = articles[0]

  return (
    <div className="w-full space-y-4">
      <button
        onClick={onBackClick}
        className="text-blue-600 mb-4 flex items-center hover:underline"
      >
        <span>← Back to all categories</span>
      </button>

      <hr />

      <div className=" w-full max-w-screen-md py-1 ">
        <Typography variant="paragraph2" className=" space-y-2 text-justify">
          <span
            className="guide-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Typography>
      </div>
    </div>
  )
}

export default CategoryContent
