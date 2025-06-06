import React, { useMemo } from 'react'
import BlogSkeleton from './BlogSkeleton'
import useWindowSize from '@/hooks/useWindowSize'
import { useBlogData } from '@/hooks/useBlogData'
import BlogBanner from './BlogBanner'
import BlogCarousel from './BlogCarousel'
import BlogPostCard from './BlogPostCard'
import { BlogPost } from '@/types/blogPost'


type Props = {
  currentPost?: BlogPost
  useCarousel?: boolean
}

function BlogsContainer({ currentPost, useCarousel = false }: Props) {
  const { posts, isLoading, error } = useBlogData()
  const { width } = useWindowSize()

  const filteredPosts = useMemo(() => {
    if (!currentPost || !posts.length) return posts

    // Find the index of the current post
    const currentIndex = posts.findIndex(
      (post) => post.pkid === currentPost.pkid
    )

    if (currentIndex === -1) return posts

    // Get posts after the current post (next blogs)
    const postsAfter = posts.slice(currentIndex + 1)

    // Get posts before the current post (previous blogs)
    const postsBefore = posts.slice(0, currentIndex)

    // Return posts after the current one, followed by posts before it
    return [...postsAfter, ...postsBefore]
  }, [posts, currentPost])

  if (isLoading) {
    return (
      <div className="gap-4 sm:grid md:grid-cols-3">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {useCarousel && width < 768 ? (
          <BlogCarousel posts={filteredPosts} />
        ) : (
          filteredPosts.map((post) => (
            <>
              <BlogPostCard key={post.pkid} post={post} />
            </>
          ))
        )}
      </div>
    </div>
  )
}

export default BlogsContainer
