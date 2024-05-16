import React from 'react';
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
    <main className="h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <header className="h-2/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold p-8">
          ClimaCast
        </h1>
        <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
          <SearchBar loadWeather={loadWeather} />
        </div>
      </header>
    </main>
  )
}

export default App;
