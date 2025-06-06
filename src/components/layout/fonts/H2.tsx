import { cn } from '@/lib/utils'

export default function H2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'mb-2 scroll-m-20 font-sans text-[25px] font-semibold uppercase tracking-tight text-blue transition-colors first:mt-0 md:text-3xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
