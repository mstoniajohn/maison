import { useQuery } from '@tanstack/react-query'
import { getNegrilGuideCategories } from '@/api/negrilGuide'

const useNegrilGuideCategories = () => {
  return useQuery({
    queryKey: ['negrilGuideCategories'],
    queryFn: getNegrilGuideCategories,
  })
}

export default useNegrilGuideCategories
