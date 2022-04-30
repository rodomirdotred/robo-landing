import React from 'react'
import ReactPlayer from 'react-player'
export default function video({ option, content }){
  return (
    <div
        className='flex flex-col justify-center items-center bg-green-300 bg-opacity-50 w-full h-full'
    >
      <h2>{ content.title }</h2>
      <p>
          {content.p}
      </p>
      <br />
      {/* {/* <ReactPlayer url='video.mp4' /> */}
      
      <video
        className=' aspect-auto bg-green-300 bg-opacity-50'
    
        controls
        autoPlay= {option.autoplay}
      >
          <source src='video.mp4' type='video/mp4'/>
      </video> 
    </div>
  )
}