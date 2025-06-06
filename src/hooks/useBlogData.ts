import { useBlogPosts } from './useBlogPosts'

export const useBlogData = () => {
  const { data: posts, isLoading, error } = useBlogPosts()

  return {
    posts: posts || [],
    isLoading,
    error,
  }
}
