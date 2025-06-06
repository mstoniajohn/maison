import React from 'react'

const TitleText = ({
  color = 'teal-500',
  bold = true,
  size = '2xl',
  text,
  pos = 'text-center',
  margin = 'mt-3 mb-2',
}) => {
  return (
    <h1
      className={`text-4xl ${
        bold ? 'font-bold' : ''
      } text-${color} ${margin} ${pos} font-sans tracking-wider`}
    >
      {text}
    </h1>
  )
}

export default TitleText
