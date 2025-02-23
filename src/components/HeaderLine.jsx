import React from 'react'
import {motion} from 'motion/react'

const HeaderLine = () => {
  return (
    <motion.div initial={{width:0}} whileInView={{width:"auto"}} transition={{duration:2, ease:'easeInOut'}} className='h-4 w-full clip-path-hr my-2'>
      
    </motion.div>
  )
}

export default HeaderLine
