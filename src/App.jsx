import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {

  const [theme,setTheme]=useState('theme-dark');

  useEffect(()=>{
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkModeMediaQuery.matches ? 'theme-dark' : 'theme-light');
  },[]);

  return (
    <div className={`${theme}`}>
      <Navbar mode={theme} set={setTheme}/>
      <Home mode={theme} />
      <About mode={theme}/>
      <Projects mode={theme} />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
