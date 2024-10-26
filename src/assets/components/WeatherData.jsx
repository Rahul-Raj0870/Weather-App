import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import sunnyImage from '../sunny.png';
import cloudyImage from '../cloudy.png';
import rainyImage from '../rainy.png';
import thunderstormImage from '../thunder.png';
import defaultImage from '../default.png'; 
import wind from '../wind.png'
import pressure from '../pressure.png'
import humidity from '../humidity.png'

const WeatherData = () => {
    const [weathervalue,setWeatherValue] = useState('')
    const [cityName,setCityName] = useState('')
    const [weatherDetail,setWeatherDetail] = useState('')
    const [cityTemperature,setTemperature]=useState('')
    const [weatherImage, setWeatherImage] = useState('')
    const [windSpeed,setWindSpeed] = useState('')
    const [atmPressure,setAtmPressure] =useState('')
    const [atmHumidity,setAtmHumidity] =useState('')
    const [displayContent,setDisplayContent] = useState(false)

    const checkWeather = async(input)=>{
      console.log(input);
      

    

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
      
      
       const result = await response.json();
       setCityName(result.name)
       setTemperature(result.main.temp)
       setWindSpeed(result.wind.speed)
       setAtmPressure(result.main.pressure)
       setAtmHumidity(result.main.humidity)
       const weather = setWeatherDetail(result.weather[0].main.toLowerCase())
      
      
       
       
       
       
          
    
    
    
      if (weather=='clear') {
        setWeatherImage(sunnyImage);
      } else if (weather=='clouds') {
        setWeatherImage(cloudyImage);
      } else if (weather=='rain') {
        setWeatherImage(rainyImage);
      } else if (weather=='thunderstorm') {
        setWeatherImage(thunderstormImage);
      } else {
        setWeatherImage(defaultImage);
      }
      setDisplayContent(true)
}

  return (
    <div className='container'>
      
        
          <Row xs={2} className=' bg-warning mx-auto  mt-4 pt-5 rounded'style={{position:'relative',width:'360px'}} >
           
             {displayContent &&(<Col style={{position:'absolute',top:'10px',fontSize:'2rem',color:'white',paddingLeft:'20px'}}>{cityName}<span style={{padding:'0px 10px'}}>°C</span><span className='text-primary'>{cityTemperature} </span></Col>)}
              <Col style={{height:'100px'}}  className='text-center d-flex align-items-start mt-4  ' >
              
                <input className='form-control  mx-3 ' style={{width:'20vw'}}  type="text" placeholder='Type a City' value={weathervalue} onChange={(e)=> setWeatherValue(e.target.value)}/>
                <button className='btn btn-danger' onClick={() =>checkWeather(weathervalue)}>search</button>
              
              </Col>
             
          </Row>
          {displayContent && (
          
            <div className=' d-flex justify-content-around' style={{marginTop:'10%'}}>
              <div className='bg-warning   ' style={{width:'400px',height:'200px',borderRadius:'30px'}}>
              <img style={{height:'180px',margin:'10px 20px'}} src= {weatherImage}  alt="" />
              
              <h2 className='text-primary' style={{display:'inline',fontSize:'2.5rem'}}>{weatherDetail}</h2>
                </div>
              <div className='bg-warning   ' style={{width:'400px',height:'200px',position:'relative',borderRadius:'30px'}}>
               <img style={{width:'50px',margin:'30px 20px'}} src= {pressure} alt="" />
               <h2 className='text-primary' style={{display:'inline',fontSize:'2rem'}}>{atmPressure} <span>Pa</span></h2>

               <img style={{width:'50px',display:'block',margin:'0px 20px'}} src= {humidity} alt="" />
               <h2 className='text-primary' style={{position:'absolute',fontSize:'2rem',left:'90px',bottom:'35px'}}>{atmHumidity} <span>g.m-3</span></h2>
               
                </div>
              <div className='bg-warning   ' style={{width:'400px',height:'200px' ,position:'relative',borderRadius:'30px'}}>
                <img style={{width:'120px',display:'block',margin:'40px '}} src={wind} alt="" />

                
                <h2 className='text-primary' style={{position:'absolute',fontSize:'2.5rem',left:'180px',bottom:'70px'}}>{windSpeed} <span>mph</span></h2>
              </div>
              
            </div>
            )}
          
        

    </div>
  

    
  )
}

export default WeatherData