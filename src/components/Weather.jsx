import PropTypes from 'prop-types'

const Weather = ({weatherData}) => {
    return (
        <div>
            {weatherData.weather ? (
                <div className="w-[500px] h-[250px] bg-[#202B3D] shadow-lg rounded-xl m-auto relative
                px-6 top-[10%]">
                    <div className="flex justify-between w-full">
                        <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                            <div className="flex flex-col items-start justify-between h-full">
                                <div>
                                    <p className="text-xl text-white">
                                        {weatherData.name},
                                        {weatherData.sys.country}
                                    </p>
                                    <p className="text-sm text-white">
                                        {weatherData.weather[0].description}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-6xl font-semibold text-white">
                                        {weatherData.main.temp.toFixed()} °C
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-between items-end">
                            <div className="relative">
                                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                                alt="Weather Icon" className="w-[120px]"/>
                            </div>
                            {weatherData.name !== undefined ? (
                                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                                    <div className="flex flex-justify-between gap-x-8">
                                        <p className='text-white'>Feels Like</p>
                                        <p className="font-bold w-20 text-white">
                                            {weatherData.main.feels_like.toFixed()} °C
                                        </p>
                                    </div>
                                    <div className="flex flex-justify-between gap-x-8">
                                        <p className='text-white'>Humidity</p>
                                        <p className="font-bold w-20 text-white">
                                            {weatherData.main.humidity} %
                                        </p>
                                    </div>
                                    <div className="flex flex-justify-between gap-x-8">
                                        <p className='text-white'>Wind Speed</p>
                                        <p className="font-bold w-20 text-white">
                                            {weatherData.wind.speed.toFixed()} KPH
                                        </p>
                                    </div>
                                    <div className="flex flex-justify-between gap-x-8">
                                        <p className='text-white'>Pressure</p>
                                        <p className="font-bold w-20 text-white">
                                            {weatherData.main.pressure} hPa
                                        </p>
                                    </div>
                                </div>
                            ) : null }
                        </div>
                    </div>
                </div>
            ): null}
        </div>
    )
}

// VALIDACION DE PROPS CON PROPTYPES
Weather.propTypes = {
    weatherData: PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            sys: PropTypes.shape({
                country: PropTypes.string.isRequired
            }).isRequired,
            weather: PropTypes.arrayOf(
                PropTypes.shape({
                    description: PropTypes.string.isRequired,
                    icon: PropTypes.string.isRequired
                })
            ).isRequired,
            main: PropTypes.shape({
                temp: PropTypes.number.isRequired,
                feels_like: PropTypes.number.isRequired,
                humidity: PropTypes.number.isRequired,
                pressure: PropTypes.number.isRequired
            }).isRequired,
            wind: PropTypes.shape({
                speed: PropTypes.number.isRequired
            }).isRequired
        }).isRequired
}

export default Weather