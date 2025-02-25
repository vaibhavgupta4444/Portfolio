import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import HeaderLine from '../components/HeaderLine'

const About = ({mode}) => {
  return (
    <div className='h-[100vh] flex flex-col md:flex-row gap-4 items-center justify-center md:p-0 p-4' id='about'>
      <div className='md:w-1/2 w-full'>
        <p className={`text-xl md:text-2xl py-4 font-semibold ${mode==='theme-light'?'text-[#222]':'text-[#E0E0E0]'}`}>Hey, I'm Vaibhav</p>
        <HeaderLine/>
        <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{ease:'easeInOut',duration:1,type:'spring'}} className={`py-2 md:py-3 ${mode==='theme-light'?'text-[#555]':'text-[#AAAAAA]'}`}>
          <div className='text-sm md:text-base'>
          <p>A passionate Full-Stack Developer specializing in the MERN stack, I love building dynamic, scalable, and user-friendly web applications. With a strong foundation in <span className={`${mode==='theme-light'?'text-[#007BFF]':'text-[#FF007A]'}`}>MongoDB, Express.js, React, Node.js, Python </span> and <span className={`${mode==='theme-light'?'text-[#007BFF]':'text-[#FF007A]'}`}>JAVA</span>. I transform ideas into interactive digital experiences.</p>
          <div className='py-2 md:py-3'>
            <p>My passion for coding started with curiosity and grew into a career where I solve problems, build products, and continuously learn new technologies.</p>
            <p>I'm also a firm believer in the power of technology to make a positive impact on the world. I'm always looking for opportunities to use my skills to make a difference.</p>
          </div>
          <div className='py-2 md:py-3'>
            <p>I'm always open to exciting projects and collaborations. Feel free to <span><a className={`${mode==='theme-light'?'text-[#007BFF] hover:text-[#FF007A]':'text-[#FF007A] hover:text-[#00E5FF]'} transition-all duration-200`} href="#contact">Connect Me</a></span> and let's create something amazing together!</p>
          </div>
          </div>
          <a href={assets.resume} download={assets.resume}><motion.button whileTap={{ scale: 0.95 }} className={`mt-4 btn-contact text-[#F5F5F5] ${mode==='theme-light'?'bg-[#222222]':'bg-[#FF007A]'} p-4`}>Download Resume</motion.button></a>
        </motion.div>
      </div>
      <div className='w-[30vw]'>
        {/* <img src={assets.me} alt="" /> */}
      </div>
    </div>
  )
}

export default About