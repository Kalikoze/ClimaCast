import React from 'react';
import { CleanedData } from './interfaces';

interface WeatherDetailsProps {
  weatherData: CleanedData | null;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  // const { temperature, humidity } = weatherData;
  console.log(weatherData)
  return (
    <div className="p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Weather Details</h2>
      {/* <p>Temperature: {temperature}</p> */}
      {/* <p>Humidity: {humidity}</p> */}
      {/* Add more weather details as needed */}
    </div>
  );
}

export default WeatherDetails;