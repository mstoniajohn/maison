import React from 'react'

const SubtitleText = ({
  color = 'teal-500',
  bold = true,
  size = '',
  text,
  pos = 'text-center',

  margin = 'mt-3 mb-2',
}) => {
  if (text.includes('</a>')) {
    text = `${text}`
  }
  return (
    <h2
      className={`${size ? size : 'text-3xl'} ${
        bold ? 'font-bold' : ''
      } text-[#51BAB3] ${margin} font-sans ${pos} mt-4 mb-3 tracking-wider`}
    >
      {text}
    </h2>
  )
}
export default SubtitleText
