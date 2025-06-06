import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateNegrilGuideArticle } from '@/api/negrilGuide'
import { toast } from 'react-toastify'

interface UpdateArticleParams {
  pkid: number
  content: string
}

export function useUpdateNegrilGuideArticle() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ pkid, content }: UpdateArticleParams) =>
      updateNegrilGuideArticle(pkid, content),
    onSuccess: () => {
      // Invalidate and refetch the articles query
      queryClient.invalidateQueries({ queryKey: ['negrilGuideArticles'] })
      toast.success('Article updated successfully')
    },
    onError: (error: Error) => {
      console.error('Error updating article:', error)
      toast.error('Failed to update article')
    },
  })
}
