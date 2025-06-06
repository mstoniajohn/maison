import { cn } from '@/lib/utils'

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        'mb-2 scroll-m-20 font-sans text-4xl font-bold uppercase tracking-tight text-blue md:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
