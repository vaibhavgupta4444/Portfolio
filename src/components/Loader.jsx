import { useState, useEffect } from "react";
import {motion} from 'motion/react'

const Loader = ({mode}) => {
  const text = "Just a Developer, Standing in Front of a Bug...";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    text.split("").forEach((char, index) => {
      setTimeout(() => {
        setVisibleText((prev) => prev + char);
      }, index * 75);
    });
  }, []);

  

  return (
    <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2.9,ease:'easeInOut',delay:3}} className={`flex p-4 justify-center items-center w-screen h-screen text-lg ${mode==='theme-light'?'text-[#00E5FF]':'text-[#FF007A]'}`}>
        {visibleText}
    </motion.div>
  );
};

export default Loader;
