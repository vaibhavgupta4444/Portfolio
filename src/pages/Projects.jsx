import Project from '../components/Project'
import HeaderLine from '../components/HeaderLine'
import Content from '../components/Content'

const Projects = ({ mode }) => {
  return (
    <div id='projects'>
      <div className='h-[100vh] flex flex-col md:flex-row items-center justify-center gap-5 md:p-0 p-4'>
        <Project src={'https://know-weather-at-your-current-location.vercel.app/'} mode={mode} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>Know Your Weather</p>
          <HeaderLine />
          <Content mode={mode} line1={'Technologies used: React.js, Tailwind CSS, Api Integration, Geolocation'} line2={'OpenWeatherApi is used to fetch real-time weather data'} line3={"Utilizes the browser's Geolocation API to get the user's latitude and longitude"} line4={'Fetches weather details like temperature, humidity, wind speed, and weather conditions.'} />
        </div>
      </div>

      <div className='h-[100vh] flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:p-0 p-4'>
        <Project src={'https://forever-frontend-kohl.vercel.app/'} mode={mode} />
        <div className='md:w-1/3 w-full py-4'>
          <p className={`text-lg font-medium ${mode === 'theme-light' ? 'text-[#222]' : 'text-[#E0E0E0]'}`}>An E-commerce Website: Forever</p>
          <HeaderLine />
          <Content mode={mode} line1={'Technologies used: React.js, Tailwind CSS, MongoDB, Express.js, Node.js, Payment Integration:Stripe'}
            line2={"Authentication: JWT (JSON Web Token) for secure user authentication."}
            line3={"Product Listings: Displays various products with filtering and sorting options."}
            line4={"Order Management: Users can track their orders, and admins can manage product listings."} />
        </div>
      </div>


    </div>
  )
}

export default Projects
