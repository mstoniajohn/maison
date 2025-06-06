export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  description: string
  snippet: string
  mainImage: {
    asset: { url: string }
  }
  topImage: {
    asset: { url: string }
  }
  slug: {
    current: string
  }
  body: [object]
  comments: [Comment]
}
export interface Comment {
  _id: string
  _createdAt: string
  approved: boolean
  name: string
  email: string
  comment: string
  _type: string
  _rev: string
  updatedAt: string

  post: {
    _ref: string
    _type: string
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      lable: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
