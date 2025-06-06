interface BlogPost {
  pkid: number
  id: string
  created_at: string // ISO date string
  updated_at: string // ISO date string
  title: string
  excerpt: string // HTML excerpt
  body: string // HTML body
  link: string
  thumbnail: string // image URL
  header_image: string // image URL
  slug: string
  order: number
  draft: boolean
  image1: string | null
  image2: string | null
  image3: string | null
  image4: string | null
  image5: string | null
  image6: string | null
  domain: number
  read_time: any
}

export type { BlogPost }
