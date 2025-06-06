export interface BlogPost {
  pkid: number
  title: string
  content: string
  excerpt: string
  image: string
  order: number
  body?: string
  description?: string
}

export interface BlogHeader {
  pkid?: number
  header_image?: string
  description?: string
  video?: string
}
