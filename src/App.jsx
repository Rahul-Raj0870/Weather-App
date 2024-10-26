import './App.css'
import WeatherData from './assets/components/WeatherData'
import 'bootstrap/dist/css/bootstrap.min.css';
import BgVideo from './assets/clouds.mp4'
function App() {
  



  return (
    <div className="app">
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <h1 style={{color:'Tomato'}} className='text-center  py-5 '>CHECK WEATHER</h1>
        <WeatherData />
      </div>
    </div>
  )
}

export default App
