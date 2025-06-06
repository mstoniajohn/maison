import React from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { Link } from '@mui/material'
import Image from 'next/image'
import Typography from '../typography/Typography'

interface Props {
  content: any
}

function BodyContentRenderer({ content }: Props) {
  return (
    <div className="mx-auto">
      <BlocksRenderer
        content={content}
        blocks={{
          image: (props) => (
            <Image
              src={props.image.url}
              alt={props.image.alternativeText || 'Skylark Negril'}
              height={props.image.height}
              width={props.image.width}
              className="my-10 w-full max-w-2xl object-cover"
            />
          ),
          paragraph: ({ children }) => (
            <Typography variant="paragraph" className="max-w-prose">
              {children}
            </Typography>
          ),
          // ...or point to a design system
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return (
                  <Typography variant="h1" className="text-blue">
                    {children}
                  </Typography>
                )
              case 2:
                return (
                  <Typography variant="h2" className="text-blue">
                    {children}
                  </Typography>
                )
              case 3:
                return (
                  <Typography variant="h3" className="text-blue">
                    {children}
                  </Typography>
                )
              case 4:
                return <Typography variant="h4">{children}</Typography>
              case 5:
                return <Typography variant="h5">{children}</Typography>
              case 6:
                return <Typography variant="h6">{children}</Typography>
              default:
                return <Typography variant="h1">{children}</Typography>
            }
          },
          // For links, you may want to use the component from your router or framework
          link: ({ children, url }) => (
            <Link href={url} className="text-pink no-underline">
              {children}
            </Link>
          ),
        }}
        modifiers={{
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <span className="italic">{children}</span>,
        }}
      />
    </div>
  )
}

export default BodyContentRenderer
