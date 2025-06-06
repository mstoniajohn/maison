import { cn } from '@/lib/utils'

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-md [&:not(:first-child)]:mt-2 leading-7 text-gray-800',
        className
      )}
    >
      {children}
    </p>
  )
}
