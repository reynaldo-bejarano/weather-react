import { useEffect, useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    handleChangeCity();
  }, []);

  useEffect(() => {
    document.title = `Clima | ${weather?.sys.country ?? ""}`
  }, [weather])

  const loadCityInfo = async (city) => {
    try {
      const request = await fetch(`${import.meta.env.VITE_APP_URL}${city}${import.meta.env.VITE_APP_URL_2}${import.meta.env.VITE_APP_KEY}`);
      const json = await request.json();
      setWeather(json);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChangeCity = (city = 'tokio') => {
    setWeather(null);
    loadCityInfo(city);
  }


  return (
    <div>
      <WeatherForm handleChangeCity={handleChangeCity} />
      <WeatherInfo weather={weather} />
    </div>
  )
}

export default App
