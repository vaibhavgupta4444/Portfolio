import Project from '../components/Project'
import HeaderLine from '../components/HeaderLine'
import Content from '../components/Content'

const Projects = ({ mode }) => {
  return (
    <div id='projects'>
      <div className='h-[100vh] flex flex-col md:flex-row items-center justify-center gap-4 md:p-0 p-4'>
        <Project src={'https://know-weather-at-your-current-location.vercel.app/'} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>Know Your Weather</p>
          <HeaderLine/>
          <Content mode={mode} text={'Web pages are becoming increasingly complex with more scripts, style sheets, images, and Flash on them. A first-time visit to a page may require several HTTP requests to load all the components. By using Expires headers these components become cacheable, which avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often associated with images, but they can and should be used on all page components including scripts, style sheets, and Flash.'} />
        </div>
      </div>

      <div className='h-[100vh] flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:p-0 p-4'>
        <Project src={'https://forever-frontend-kohl.vercel.app/'} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>An E-commerce Website: Forever</p>
          <HeaderLine/>
          <Content mode={mode} text={'Web pages are becoming increasingly complex with more scripts, style sheets, images, and Flash on them. A first-time visit to a page may require several HTTP requests to load all the components. By using Expires headers these components become cacheable, which avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often associated with images, but they can and should be used on all page components including scripts, style sheets, and Flash.'} />
        </div>
      </div>

      
    </div>
  )
}

export default Projects
