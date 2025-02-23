import React from 'react'
import Project from '../components/Project'
import HeaderLine from '../components/HeaderLine'
import {motion} from 'motion/react'

const Projects = ({ mode }) => {
  return (
    <div id='projects'>
      <div className='h-[100vh] flex flex-col md:flex-row items-center justify-center gap-4 md:p-0 p-4'>
        <Project src={'https://know-weather-at-your-current-location.vercel.app/'} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>Know Your Weather</p>
          <HeaderLine/>
          <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:2,type:'spring'}} className={`text-sm ${mode === 'theme-light' ? 'text-[#555]' : 'text-[#AAAAAA]'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium inventore veritatis unde placeat consectetur enim architecto atque nostrum sunt fugit ut repudiandae, earum qui, repellendus et tempora! Incidunt, corrupti?</motion.p>
        </div>
      </div>

      <div className='h-[100vh] flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:p-0 p-4'>
        <Project src={'https://forever-frontend-kohl.vercel.app/'} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>An E-commerce Website: Forever</p>
          <HeaderLine/>
          <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:2,type:'spring'}} className={`text-sm ${mode === 'theme-light' ? 'text-[#555]' : 'text-[#AAAAAA]'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium inventore veritatis unde placeat consectetur enim architecto atque nostrum sunt fugit ut repudiandae, earum qui, repellendus et tempora! Incidunt, corrupti?</motion.p>
        </div>
      </div>

      
    </div>
  )
}

export default Projects
