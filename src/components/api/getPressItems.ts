import { useQuery } from '@tanstack/react-query'
import { PRESS_URLS } from './urls'

const fetchPressItems = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${PRESS_URLS.GET}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error: any) {
    console.log(error)
    throw new Error(`Error getting press items: ${error?.message || error}`)
  }
}

const useFetchPressItems = () => {
  const {
    data: pressItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [PRESS_URLS.GET],
    queryFn: fetchPressItems,
  })
  return { pressItems, isLoading, isError }
}

export default useFetchPressItems
