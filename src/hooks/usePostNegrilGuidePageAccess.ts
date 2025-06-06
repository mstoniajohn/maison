import { NegrilGuideAPI } from '@/api/negrilGuide'
import { useMutation } from '@tanstack/react-query'

const usePostNegrilGuidePageAccess = () => {
  const mutation = useMutation({
    mutationKey: ['negrilGuidePageAccessPost'],
    mutationFn: (email: string) => NegrilGuideAPI.requestAccess(email),
  })

  return mutation
}

export default usePostNegrilGuidePageAccess
