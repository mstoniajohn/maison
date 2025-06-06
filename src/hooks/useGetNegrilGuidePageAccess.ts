import { NegrilGuideAPI } from '@/api/negrilGuide'
import { useQuery } from '@tanstack/react-query'

const useGetNegrilGuidePageAccess = () => {
  const data = useQuery({
    queryKey: ['negrilGuidePageAccess'],
    queryFn: () => NegrilGuideAPI.checkAccess(),
  })

  return data
}

export default useGetNegrilGuidePageAccess
