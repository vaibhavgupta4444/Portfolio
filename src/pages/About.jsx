import { assets } from '../assets/assets'
import HeaderLine from '../components/HeaderLine'

const About = ({mode}) => {
  return (
    <div className='h-[100vh] flex flex-col md:flex-row gap-4 items-center justify-center md:p-0 p-4' id='about'>
      <div className='md:w-1/2 w-full'>
        <p className={`text-2xl py-4 font-semibold ${mode==='theme-light'?'text-[#222]':'text-[#E0E0E0]'}`}>Hey, I'm Vaibhav</p>
        <HeaderLine/>
        <div className={`py-2 md:py-3 ${mode==='theme-light'?'text-[#555]':'text-[#AAAAAA]'} animation-above`}>
          <p>A passionate Full-Stack Developer specializing in the MERN stack, I love building dynamic, scalable, and user-friendly web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I transform ideas into interactive digital experiences.</p>
          <div className='py-2 md:py-3'>
            <p>My passion for coding started with curiosity and grew into a career where I solve problems, build products, and continuously learn new technologies. Whether it's developing e-commerce platforms, web apps, or search scrapers, I strive to write clean, maintainable, and efficient code.</p>
          </div>
          <div className='py-2 md:py-3'>
            
            <p>I'm always open to exciting projects and collaborations. Feel free to <span className='link'><a href="#contact">Connect Me</a></span> and let's create something amazing together!</p>
          </div>
          <a href={assets.resume} download={assets.resume}><button className='mt-4 btn-contact p-4'>Download Resume</button></a>
        </div>
      </div>
      <div className='w-[30vw]'>
        {/* <img src={assets.me} alt="" /> */}
      </div>
    </div>
  )
}

export default About