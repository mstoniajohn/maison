import { getApiData } from '@/utils/getApiData'
import { BlogPost } from '@/types/blogPost'
import SKYLARK_URLS from './urls'

const blogIdRewriteMap = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 8,
  8: 9,
  9: 10,
}

const rewriteBlogId = (id: number) => {
  return blogIdRewriteMap[id as keyof typeof blogIdRewriteMap] || id
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await getApiData<BlogPost[]>({
      endpoint: SKYLARK_URLS.BLOG_POSTS,
    })
    return response
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw error
  }
}

export const getBlogPostById = async (pkid: number): Promise<BlogPost> => {
  try {
    const response = await getApiData<BlogPost>({
      endpoint: `${SKYLARK_URLS.BLOG_POSTS}${rewriteBlogId(pkid)}/`,
      useToken: false,
    })
    return response
  } catch (error) {
    console.error(`Error fetching blog post with pkid ${pkid}:`, error)
    throw error
  }
}

export const getBlogPostByOrderNumber = async (
  orderNumber: number
): Promise<BlogPost> => {
  try {
    const response = await getApiData<BlogPost>({
      endpoint: `${SKYLARK_URLS.BLOG_POSTS}?order=${orderNumber}`,
      useToken: false,
    })
    return response
  } catch (error) {
    console.error(
      `Error fetching blog post with order number ${orderNumber}:`,
      error
    )
    throw error
  }
}
