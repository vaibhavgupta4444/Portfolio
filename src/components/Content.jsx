import {motion} from 'motion/react'

const Content = ({text,mode}) => {
  return (
    <motion.p initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:1,type:'spring'}} className={`text-sm ${mode === 'theme-light' ? 'text-[#555]' : 'text-[#AAAAAA]'}`}>{text}</motion.p>
  )
}

export default Content