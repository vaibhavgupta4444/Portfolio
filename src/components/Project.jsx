import { useState } from 'react'

const Project = ({src,mode}) => {

  const [preview,setPreview]=useState(false);

  return (
    <div onClick={()=>setPreview(!preview)} className='md:w-1/2 w-full md:h-[65vh] h-1/2 border-2'>
      {!preview?
      <div className={`w-full h-full flex justify-center items-center ${mode==='theme-light'?'bg-[#222]':'bg-[#555]'} underline animate-pulse`}>
          View Site
      </div>:
      <iframe src={src} sandbox="allow-scripts allow-same-origin" className='w-full h-full'/>}
    </div>
  )
}

export default Project
