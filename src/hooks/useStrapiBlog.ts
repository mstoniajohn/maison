import { useQuery } from '@tanstack/react-query'

const url = (slug: string) =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?filters[slug]$eq=${slug}&populate=*`

const fetchBlogs = async ({ slug }: { slug: string }) => {
  const res = await fetch(url(slug), {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAP_API_TOKEN}`,
    },
  })
  const data = await res.json()
  return data
}

const useBlog = ({ slug }: { slug: string }) => {
  const data = useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlogs({ slug }),
    enabled: !!slug,
  })
  return data
}

export default useBlog
