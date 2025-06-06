import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PRESS_URLS } from './urls'
import { toast } from 'react-toastify'

const updatePress = async ({
  press,
  pkid,
}: {
  press: FormData
  pkid: number
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${PRESS_URLS.PUT(pkid)}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: press,
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error: any) {
    console.log(error)
    throw new Error(`Error updating press: ${error?.message || error}`)
  }
}

const useUpdatePress = () => {
  const queryClient = useQueryClient()
  const data = useMutation({
    mutationFn: updatePress,
    mutationKey: [PRESS_URLS.PUT],
    onSuccess: (data, variables, context) => {
      console.log('Press updated successfully')
      toast.success('Press updated successfully')
      //   invalidate
      queryClient.invalidateQueries({
        queryKey: [PRESS_URLS.GET],
      })
    },
    onError: (error, variables, context) => {
      console.log('error updating press: ${error}')
      toast.error(`Error updating press: ${error}`)
    },
  })
  return data
}

export default useUpdatePress
