import { useQuery } from '@tanstack/react-query'
import { getNegrilGuideArticlesByCategory } from '@/api/negrilGuide'

const useNegrilGuideArticles = (categoryName: string | null) => {
  return useQuery({
    queryKey: ['negrilGuideArticles', categoryName],
    queryFn: () => getNegrilGuideArticlesByCategory(categoryName as string),
    enabled: !!categoryName, // Only run the query if categoryName is provided
  })
}

export default useNegrilGuideArticles
