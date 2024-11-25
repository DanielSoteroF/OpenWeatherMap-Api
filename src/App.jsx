import './App.css'
import { useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")


  const API_KEY = "6323ba173ad640b11cea7619c6f09ac2"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }

  return (
      <div className='w-full h-full relative'>
        <div>
          <h1 className='text-center text-4xl font-bold text-white py-8'>
            OpenWeatherMap-Api
          </h1>
        </div>
        <br />
        <div className='text-center p-4 pb-10'>
          <input type='text' className='py-3 px-10 w-[700px] text-lg rounded-3xl border bg-[#202B3D] border-gray-700
          text-white placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md' 
          placeholder='Ingresa una ciudad' 
          value={location} onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          />
        </div>

        <Weather weatherData={data} />
      </div>
  )
}

export default App
