import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { getWeather } from './apiCalls';
import { SearchBar } from './SearchBar';
import WeatherDetails from './WeatherDetails';
import { cleanData } from './helpers';
import { CleanedData } from './interfaces';

const App = () => {
  const [weatherData, setWeatherData] = useState<CleanedData | null>(null);

  const loadWeather = async (city: string) => {
    try {
      const weatherData = await getWeather(city);
      setWeatherData(cleanData(weatherData));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <main className="h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <header className="h-2/5 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold p-8">
            ClimaCast
          </h1>
          <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
            <Routes>
              <Route path="/" element={<SearchBar loadWeather={loadWeather} />} />
              <Route path="/weather/:city" element={<WeatherDetails weatherData={weatherData} />} />
            </Routes>
          </div>
        </header>
      </main>
    </Router>
  )
}

export default App;
