import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const POST_GIFT_CARD_URL = `${process.env.NEXT_PUBLIC_API_URL}/gift_cards/`

interface PostGiftCardProps {
  name: string
  email: string
  phone: string
  amount: string
  file?: File | Blob | null
}

const postGiftCard = async (data: PostGiftCardProps) => {
  const formData = new FormData()
  if (data.file) {
    formData.append('file', data.file)
  }
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('amount', data.amount)
  formData.append('property', 'skylark')

  const response = await fetch(POST_GIFT_CARD_URL, {
    method: 'POST',
    body: formData,
  })
  return response.json()
}

const usePostGiftCard = () => {
  const mutation = useMutation({
    mutationFn: postGiftCard,
  })
  return mutation
}
export type { PostGiftCardProps }
export { postGiftCard }
export default usePostGiftCard
