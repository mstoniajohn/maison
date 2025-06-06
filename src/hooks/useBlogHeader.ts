import SKYLARK_URLS from '@/api/urls'
import { BlogHeader } from '@/types/blogPost'
import { getApiData } from '@/utils/getApiData'
import { useQuery } from '@tanstack/react-query'

const getBlogHeader = async (): Promise<BlogHeader[]> => {
  const response = await getApiData<BlogHeader[]>({
    endpoint: SKYLARK_URLS.BLOG_HEADER,
  })
  return response
}

const useBlogHeader = () => {
  return useQuery<BlogHeader[]>({
    queryKey: ['blogHeader'],
    queryFn: () => getBlogHeader(),
  })
}

export default useBlogHeader
