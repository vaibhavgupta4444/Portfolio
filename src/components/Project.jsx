import {motion} from 'motion/react'
import { useState } from 'react'

const Project = ({src,mode}) => {

  const [preview,setPreview]=useState(false);

  return (
    <motion.div onClick={()=>setPreview(!preview)}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,ease:'easeInOut'}} className='md:w-1/2 w-full md:h-[65vh] h-1/2 border-2'>
      {!preview?
      <div className={`w-full h-full flex justify-center items-center bg-[#555] text-[#E0E0E0] underline cursor-pointer`}>
          View Site
      </div>:
      <iframe src={src} sandbox="allow-scripts allow-same-origin" className='w-full h-full'/>}
    </motion.div>
  )
}

export default Project
