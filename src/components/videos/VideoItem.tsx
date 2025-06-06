import React from 'react'

const VideoItem = ({ url }: { url: string }) => {
  return (
    <div className="relative ">
      <iframe
        loading="lazy"
        className="aspect-video  h-full max-h-[750px] w-full"
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoItem
