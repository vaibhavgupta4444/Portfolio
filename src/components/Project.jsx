import {motion} from 'motion/react'

const Project = ({src}) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,ease:'easeInOut'}} className='md:w-1/2 w-full md:h-[65vh] h-1/2 border-2'>
      <iframe src={src} loading='lazy' className='w-full h-full'/>
    </motion.div>
  )
}

export default Project
