import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';

const App = () => {
  const [isVisible,setIsVisible]=useState(true);
  const [theme, setTheme] = useState('theme-dark');

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkModeMediaQuery.matches ? 'theme-dark' : 'theme-light');
    setTimeout(()=>{
      setIsVisible(false);
    },5000);
  }, []);

  return (
    <div className={`${theme === 'theme-light' ? 'bg-[#F5F5F5] text-[#555]' : 'bg-[#121212] text-[#E0E0E0]'} ${theme}`}>
      {isVisible?<Loader mode={theme}/>:
      <div>
        <ToastContainer />
        <Navbar mode={theme} set={setTheme} />
        <Home mode={theme} />
        <Projects mode={theme} />
        <About mode={theme} />
        <Contact mode={theme} />
        <Footer />
      </div>
      }
    </div>
  )
}

export default App
