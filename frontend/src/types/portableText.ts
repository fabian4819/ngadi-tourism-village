// src/types/portableText.ts
import type { 
  PortableTextReactComponents,
  PortableTextComponentProps,
  PortableTextMarkComponentProps 
} from '@portabletext/react'
import type { 
  PortableTextBlock,
  PortableTextListItemBlock
} from '@portabletext/types'
import type { SanityImage } from './sanity'

export interface PortableTextImageValue extends SanityImage {
  caption?: string
}

export interface PortableTextLinkValue {
  _type: 'link'
  href: string
}

// Proper component prop types
export type PortableTextBlockComponentProps = PortableTextComponentProps<PortableTextBlock>
export type PortableTextListItemComponentProps = PortableTextComponentProps<PortableTextListItemBlock>
export type PortableTextMarkProps = PortableTextMarkComponentProps<PortableTextLinkValue>

// Simple props for components that only need children
export interface SimpleComponentProps {
  children: React.ReactNode
}

// Generic list component props (with optional children to match PortableText expectations)
export interface PortableTextListProps {
  children?: React.ReactNode
}

export interface PortableTextImageProps {
  value: PortableTextImageValue
}

export type CustomPortableTextComponents = Partial<PortableTextReactComponents>