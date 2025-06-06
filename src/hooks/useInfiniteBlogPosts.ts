import { useState, useEffect } from 'react'
import { useBlogPosts } from './useBlogPosts'
import { BlogPost } from '@/types/blogPost'

export const useInfiniteBlogPosts = (focusedPostId: number) => {
  const { data: allPosts, isLoading } = useBlogPosts()
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([])
  const [hasMore, setHasMore] = useState(true)
  const postsPerPage = 5

  useEffect(() => {
    if (allPosts) {
      // Find the index of the focused post
      const focusedIndex = allPosts.findIndex(
        (post) => post.pkid === focusedPostId
      )

      if (focusedIndex !== -1) {
        // Calculate the range of posts to show initially
        const startIndex = Math.max(
          0,
          focusedIndex - Math.floor(postsPerPage / 2)
        )
        const endIndex = Math.min(allPosts.length, startIndex + postsPerPage)

        setDisplayedPosts(allPosts.slice(startIndex, endIndex))
        setHasMore(endIndex < allPosts.length)
      }
    }
  }, [allPosts, focusedPostId])

  const loadMore = () => {
    if (allPosts && displayedPosts.length < allPosts.length) {
      const nextPosts = allPosts.slice(
        displayedPosts.length,
        displayedPosts.length + postsPerPage
      )
      setDisplayedPosts((prev) => [...prev, ...nextPosts])
      setHasMore(displayedPosts.length + nextPosts.length < allPosts.length)
    }
  }

  return {
    posts: displayedPosts,
    isLoading,
    hasMore,
    loadMore,
  }
}
