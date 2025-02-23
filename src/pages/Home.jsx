import { useEffect, useState } from "react";
import Bot from "../components/Bot";

const Home = ({ mode }) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [displayedText, setDisplayedText] = useState("Vaibhav Gupta");

  useEffect(() => {
    let iterationCount = 0;
    const targetText = "Vaibhav Gupta";

    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        prev
          .split("")
          .map((_, idx) =>
            idx < iterationCount
              ? targetText[idx]
              : characters[Math.floor(Math.random() * characters.length)]
          )
          .join("")
      );

      iterationCount++;

      if (iterationCount > targetText.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className="absolute z-10">
        <p id='name' className='pb-8 font-medium text-xl'>{displayedText.split("").map((char, index) => (
          <span key={index} className="animate-bounce mx-1">
            {char}
          </span>
        ))}</p>
        <div className={`text-4xl font-semibold md:text-7xl ${mode==='theme-light'?'text-[#555]':'text-[#AAAAAA]'}`}><span className='flex items-center pb-2'>Full Stack <hr className='w-20 md:w-[20vh] xl:w-[40vh] h-0.5 border-none bg-[#333333]' /></span><span id="animate"> Web Developer</span></div>
      </div>
      <div className="absolute right-0 h-full w-full z-0">
        <Bot />
      </div>
    </div>
  )
}

export default Home
