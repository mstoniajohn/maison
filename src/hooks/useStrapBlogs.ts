import { useQuery } from '@tanstack/react-query'

const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*`

const fetchBlogs = async () => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAP_API_TOKEN}`,
    },
  })
  const data = await res.json()
  return data
}

const useBlogs = () => {
  const data = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  })
  return data
}

export default useBlogs
