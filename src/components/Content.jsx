import {motion} from 'motion/react'

const Content = ({line1,line2,line3,line4,mode}) => {
  return (
    <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:0.5,type:'spring'}} className={`text-sm ${mode === 'theme-light' ? 'text-[#555]' : 'text-[#AAAAAA]'}`}>
      <ul className='list-disc list-inside lg:list-outside text-xs md:text-sm lg:text-base'>
        <li className='py-0.5'>{line1}</li>
        <li className='py-0.5'>{line2}</li>
        <li className='py-0.5'>{line3}</li>
        <li className='py-0.5'>{line4}</li>
      </ul>
      </motion.div>
  )
}

export default Content