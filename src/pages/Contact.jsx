import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'
import HeaderLine from '../components/HeaderLine';

const Contact = () => {

  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const onChangeHandler=(e)=>{
    setMessage(e.target.value);
    let target=document.querySelector('textarea');
    target.style.height='auto';
    target.style.height=target.scrollHeight+'px';
  }

  return (
    <div className='h-[100vh] flex items-center justify-center' id='contact'>
      <div className='xl:w-1/2 sm:w-4/5 w-full p-4'>
        <p className='text-2xl pb-8'>Contact Me</p>
        <HeaderLine/>
        <motion.form initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{type:'tween',duration:1}} action="" className='flex flex-col gap-10 py-12'>
          <input className='p-4 border-b border-[#333333] bg-[#121212]' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='JoeDoe@gmail.com' required />
          <textarea className='p-4 border-b border-[#333333] bg-[#121212]' rows={'1'} name="message" value={message} onChange={(e)=>onChangeHandler(e)} placeholder='Say hello......' required>
          </textarea>
          <motion.button whileTap={{ scale: 0.95 }} className='flex items-center justify-center btn-contact w-[13rem] bg-[#FF007A] p-4 shadow-lg shadow-[#FF007A]'>
            Send Message <img width={'30rem'} src={assets.send} alt="" />
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
