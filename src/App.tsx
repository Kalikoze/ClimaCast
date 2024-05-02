import React from 'react';
import { useEffect } from 'react';
import { getWeather } from './apiCalls';
import { SearchBar } from './SearchBar';

const App = () => {
  const loadWeather = async (city: string) => {
    try {
      const weatherData = await getWeather(city);
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <main className="h-screen">
      <header className="h-2/5 flex flex-col items-center">
        <h1 className="text-5xl font-bold underline p-8">
          ClimaCast
        </h1>
        <SearchBar loadWeather={loadWeather} />
      </header>
    </main>
  )
}

export default App;
