import { InputData, CleanedData } from './interfaces';

export const cleanData = (data: InputData): CleanedData => {
  return {
    cityName: data.name,
    weather: data.weather.map(w => ({
      main: w.main,
      description: w.description,
      icon: w.icon
    })),
    temperature: {
      min: data.main.temp_min,
      max: data.main.temp_max,
      feels_like: data.main.feels_like
    },
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg
    }
  };
};

