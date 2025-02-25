import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ThemeButton from './ThemeButton';

const Navbar = ({ mode, set }) => {
  const [sidemenu, setSidemenu] = useState(false);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (sidemenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [sidemenu]);

  return (
    <>
      <div className='fixed w-full md:w-0 md:h-[100vh] px-6 py-8 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex md:flex-col justify-between flex-row items-center z-50'>
        <div className='flex flex-col items-center gap-4'>
          {!sidemenu && (
            <div>
              <a href='/' className={'block'}>
                <img className='w-4 md:w-6' src={`${mode==='theme-light'?'/lightModeLogo.png':'/darkModeLogo.png'}`} alt="" />
              </a>
            </div>
          )}
          <div className='hidden md:flex flex-col gap-16'>
            <a href="#about" className='rotate-[-90deg]'>About</a>
            <a href="#projects" className='rotate-[-90deg]'>Projects</a>
            <a href="#contact" className='rotate-[-90deg]'>Contacts</a>
          </div>
        </div>
        <div className='hidden md:flex flex-col items-center gap-2'>
          <a href="https://github.com/vaibhavgupta4444"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/vaibhavgupta4444"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/vaibhav_gupta4"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className='hidden md:block'>
          <ThemeButton set={set} mode={mode} />
        </div>
        {!sidemenu && (
          <motion.button
            whileTap={{ opacity: 0.5, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() => setSidemenu(true)}
            className='block md:hidden hover:bg-gray-400/30 p-4'
          >
            <i className="fa-solid fa-bars hover:scale-105 transition-all duration-200"></i>
          </motion.button>
        )}
      </div>

      {/* Small Screen Sidebar */}
      <div
        className={`flex flex-col items-center z-50 justify-between md:hidden fixed h-[100vh] w-full ${mode==='theme-light'?'bg-[#F5F5F5]/95':'bg-[#121212]/95'} ${
          sidemenu ? 'top-0' : 'top-[-100vh]'
        } transition-all duration-500`}
      >
        <div className='flex justify-between items-center w-full px-6 py-8'>
          <a href='/' onClick={() => setSidemenu(false)}>
          <img className='w-4 md:w-6' src={`${mode==='theme-light'?'/lightModeLogo.png':'/darkModeLogo.png'}`} alt="" />
          </a>
          <motion.button
            whileTap={{ scale: 0.95, opacity: 0.5 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() => setSidemenu(false)}
            className='p-4 hover:bg-gray-400/30'
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </motion.button>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 h-[80vh] w-full text-xl hover:scale-105 transition-all duration-200'>
          <a onClick={() => setSidemenu(false)} href="#about">About</a>
          <a onClick={() => setSidemenu(false)} href="#projects">Projects</a>
          <a onClick={() => setSidemenu(false)} href="#contact">Contacts</a>
        </div>
        <div className='flex items-center justify-between w-full px-6'>
          <div className='flex items-center gap-2 text-xl'>
            <a href="https://github.com/vaibhavgupta4444"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/vaibhavgupta4444"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/vaibhav_gupta4"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <ThemeButton mode={mode} set={set} />
        </div>
      </div>
    </>
  );
};

export default Navbar;