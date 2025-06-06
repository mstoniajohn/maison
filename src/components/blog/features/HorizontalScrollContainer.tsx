import React, { useEffect, useRef, useState } from 'react'
import { BlogPost } from '@/types/blogPost'
import BlogPostCard from './BlogPostCard'
// EAAaeqblni0wBO4ZAQOIRLzfZC7rUZBnrdmsViZCQZBpFCtXQLCwvZBZA4XwMMcAI89w0HUO2a8QbV5jsf6iHP9mVyyQ3qIXOjuScRH9H6ECUZA0yo9ZA8ATfOThmifzEZAuDFqOulsSKJSpwdtQHOfv63ZBcevCRbR15dl9waKUtomdex8RnCvGugzICH6m5EQZB2bQfbinIfl5jEScjFn2P7xPf397YuDM8kuC0iqwIOjIZD



interface HorizontalScrollContainerProps {
  posts: BlogPost[]
}

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({
  posts,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getVisiblePosts = () => {
    const postsPerPage = isMobile ? 1 : 3
    const visiblePosts = []

    for (let i = 0; i < postsPerPage; i++) {
      const index = (currentIndex + i) % posts.length
      visiblePosts.push(posts[index])
    }

    return visiblePosts
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - (isMobile ? 1 : 3)
      return newIndex < 0 ? posts.length - (isMobile ? 1 : 3) : newIndex
    })
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + (isMobile ? 1 : 3)
      return newIndex >= posts.length ? 0 : newIndex
    })
  }
  // if posts is empty, return null
  if (posts.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 lg:-left-12">
        <button
          onClick={handlePrevious}
          className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          ←
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto py-4 scrollbar-hide"
      >
        {getVisiblePosts().map((post) => (
          <div key={post.pkid} className=" w-full lg:pl-10">
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
      <div className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 lg:-right-12">
        <button
          onClick={handleNext}
          className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default HorizontalScrollContainer
