import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteBlogPosts } from '@/hooks/useInfiniteBlogPosts'
import BlogPostDetail from './BlogPostDetail'

const BlogInfiniteScroll = () => {
  const [focusedPostId, setFocusedPostId] = useState(0)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const focusedPostRef = useRef<HTMLDivElement>(null)
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
  })

  const { posts, isLoading, hasMore, loadMore } =
    useInfiniteBlogPosts(focusedPostId)

  useEffect(() => {
    const currentHash = window.location.hash
    if (currentHash) {
      const postId = parseInt(currentHash.replace('#', ''))
      setFocusedPostId(postId)
    }

    const handleHashChange = () => {
      const newHash = window.location.hash
      if (newHash) {
        const postId = parseInt(newHash.replace('#', ''))
        setFocusedPostId(postId)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [inView, hasMore, isLoading, loadMore])

  useEffect(() => {
    if (focusedPostRef.current && posts.length > 0) {
      // Use requestAnimationFrame to ensure the scroll happens after the DOM is updated
      requestAnimationFrame(() => {
        focusedPostRef.current?.scrollIntoView({
          behavior: isInitialLoad ? 'auto' : 'smooth',
          block: 'start',
          inline: 'start',
        })
        setIsInitialLoad(false)
      })
    }
  }, [focusedPostId, posts.length, isInitialLoad])

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div
          key={post.pkid}
          ref={post.pkid === focusedPostId ? focusedPostRef : undefined}
          className={
            post.pkid === focusedPostId
              ? ' mx-auto w-full max-w-[500px] rounded-lg sm:p-2'
              : 'mx-auto w-full max-w-[500px] sm:p-2'
          }
        >
          <BlogPostDetail post={post} />
        </div>
      ))}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex h-20 items-center justify-center"
        >
          {isLoading && (
            <div className="text-gray-500">Loading more posts...</div>
          )}
        </div>
      )}
    </div>
  )
}

export default BlogInfiniteScroll
