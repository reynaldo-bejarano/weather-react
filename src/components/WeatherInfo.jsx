

const WeatherInfo = ({ weather }) => {

  return (

    <div className="w-11/12 md:w-2/3 lg:w-2/6 2xl:w-2/5 mx-auto mt-4  md:mt-14 bg-gray-900 p-5 rounded-lg font-bold text-white opacity-90">
      <p className="mb-3 text-center text-2xl 2xl:text-3xl">Clima en {weather?.name}, {weather?.sys.country}</p>
      <p className=" mb-3 md:mb-10 text-5xl 2xl:text-6xl text-center"> {weather?.main.temp} °C </p>
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="mb-3 2xl:text-1xl">Temperatura máxima: {weather?.main.temp_max} °C </p>
          <p className="mb-3 2xl:text-1xl">Temperatura mínima: {weather?.main.temp_min}°C </p>
          <p className="mb-3 2xl:text-1xl">Humedad: {weather?.main.humidity}  </p>
          <p className="mb-3 2xl:text-1xl">Velocidad del viento: {weather?.wind.speed}km </p>
        </div>
        <div className="grid justify-center">
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt={weather?.name} />
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo