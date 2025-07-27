import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
}

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: SanityImage
}

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  author: Author
  mainImage?: SanityImage
  publishedAt: string
  categories?: Category[]
  body?: PortableTextBlock[]
  excerpt?: string
}