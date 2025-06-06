import React from 'react'
import Typography from '@/components/typography/Typography'

interface NegrilGuideArticleProps {
  title: string
  content: string
  image: string
  onClick?: () => void
}

const NegrilGuideArticle: React.FC<NegrilGuideArticleProps> = ({
  title,
  content,
  image,
  onClick,
}) => {
  return (
    <li className="hover:text-blue-600 cursor-pointer" onClick={onClick}>
      <div className="flex items-start space-x-4">
        <img
          src={image}
          alt={title}
          className="h-16 w-16 rounded object-cover"
        />
        <div>
          <Typography variant="h4" className="font-medium">
            {title}
          </Typography>
          <Typography variant="paragraph" className="text-gray-600">
            {content}
          </Typography>
        </div>
      </div>
    </li>
  )
}

export default NegrilGuideArticle
