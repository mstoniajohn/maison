import {
  NegrilGuideAPI,
  NegrilGuidePageAccessResponse,
} from '@/api/negrilGuide'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const useNegrilGuideAccess = () => {
  const queryClient = useQueryClient()

  // get access on mount.
  const {
    data: access,
    isPending,
    error: loadError,
  } = useQuery<NegrilGuidePageAccessResponse>({
    queryKey: ['negril-guide-access'],
    queryFn: NegrilGuideAPI.checkAccess,
    retry: false,
  })

  //   POST on email submit.
  const {
    mutateAsync: requestAccess,
    error: mutateError,
    isPending: isRequesting,
  } = useMutation({
    mutationFn: (email: string) => NegrilGuideAPI.requestAccess(email),
    onSuccess: (data) => {
      console.log(data)
      // keep cache in sync.
      queryClient.setQueryData(['negril-guide-access'], data)
    },
  })

  return {
    state: {
      loading: isPending || isRequesting,
      unlocked: !!access?.unlocked,
      email: access?.email ?? null,
      password: access?.password ?? null,
    },
    error: loadError ?? mutateError ?? null,
    actions: {
      requestAccess,
    },
  }
}

export default useNegrilGuideAccess
