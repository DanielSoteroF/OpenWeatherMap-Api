import './App.css'
import { useState } from 'react'
import axios from 'axios' // Importamos la librería axios (Solicitudes HTTP)
import Weather from './components/Weather'


function App() {

  //ESTADOS LOCALES 
  const [data, setData] = useState({}) //CONTIENE IMFORMACION DEL CLIMA QUE SE OBTIENE DE LA API
  const [location, setLocation] = useState("") //CONTIENE LA LOCACION QUE SE VA A BUSCAR

  //API Y URL DE LA API
  const API_KEY = "6323ba173ad640b11cea7619c6f09ac2"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  //FUNCION PARA BUSCAR LA LOCACION
  const searchLocation = (event) => {
    if (event.key === 'Enter') { //SI SE PRESSIONA ENTER
      axios.get(url)             //HACE UNA SOLICITUD GET A LA API
      .then((response) => {      //SI LA SOLICITUD TIENE EXITO, ACTUALIZA EL ESTADO "DATA"
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")             //ACTUALIZA EL ESTADO "LOCATION" 
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
