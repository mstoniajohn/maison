import { useQuery } from '@tanstack/react-query'
import { getBlogPosts, getBlogPostById } from '@/api/blogPost'
import { BlogPost } from '@/types/blogPost'

export const useBlogPosts = () => {
  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: getBlogPosts,
  })
}

export const useBlogPost = (pkid: number) => {
  console.log('pkid', pkid)
  return useQuery<BlogPost>({
    queryKey: ['blogPost', { pkid }],
    queryFn: () => getBlogPostById(pkid),
    enabled: !!pkid,
  })
}
