import React from 'react'

type Props = {
  url?: string
  id?: string
}

const EatAppWidget = (props: Props) => {
  const { url, id } = props
  return (
    <div>
      <script
        async
        src="https://d183cnjuwjcs99.cloudfront.net/assets/widget/widget-iframe.min.js"
      ></script>
      <iframe
        id={id}
        title="Eat Widget"
        height="100%"
        width="100%"
        className=" z-50  mx-auto min-h-[380px] w-[100%]  overflow-hidden p-0 sm:w-[500px]"
        src={url}
      />
    </div>
  )
}

export default EatAppWidget
