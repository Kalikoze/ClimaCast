import React from 'react';
import { useEffect } from 'react';
import { getWeather } from './apiCalls';

const App = () => {

  useEffect(() => {
    loadWeather();
    return () => {};
  }, []);

  const loadWeather = async () => {
    try {
      const weatherData = await getWeather('San Diego');
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <h1 className="text-3xl font-bold underline">
      ClimaCast
    </h1>
  )
}

export default App;
