import { cn } from '@/lib/utils'
import React from 'react'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph'
  | 'caption'
  | 'paragraph2'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The style variant to render. Defaults to `paragraph`
   */
  variant?: Variant
  /**
   * The content of the component
   */
  children: React.ReactNode
  /**
   * Additional classes to be applied
   */
  className?: string
  /**
   * You can pass any other valid HTML attributes here
   */
  [key: string]: any
}

/**
 * Maps variant names to actual HTML tags
 */
const variantToTagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  paragraph: 'p',
  caption: 'span',
  paragraph2: 'p',
}

/**
 * Default Tailwind styles for each variant
 */
const variantClasses: Record<Variant, string> = {
  h1: 'scroll-m-20 text-3xl font-semibold  tracking-tight leading-none lg:text-4xl font-sans',
  h2: 'text-2xl pb-2  mt-10 font-semibold tracking-tight transition-colors first:mt-0 scroll-m-20 font-sans lg:text-3xl',
  h3: 'mt-8 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl font-sans',
  h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h5: 'text-md font-medium mb-2',
  h6: 'text-base font-medium mb-1',
  paragraph: 'text-base leading-7 [&:not(:first-child)]:mt-6',
  paragraph2:
    'm-0 font-[itc-avant-garde-gothic-pro,sans-serif] pb-2.5 font-light text-[#5A5A5A] text-base leading-6',
  caption: 'text-sm text-gray-500',
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  children,
  className = '',
  ...rest
}) => {
  const Component: any = variantToTagMap[variant]
  const defaultClasses = variantClasses[variant]

  return (
    <Component className={`${cn(defaultClasses, className)}`} {...rest}>
      {children}
    </Component>
  )
}

export default Typography
