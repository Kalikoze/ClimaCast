export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface InputData {
  coord: { lon: number; lat: number };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: { all: number };
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CleanedData {
  cityName: string;
  weather: { main: string; description: string; icon: string }[];
  temperature: { min: number; max: number; feels_like: number };
  pressure: number;
  humidity: number;
  visibility: number;
  wind: { speed: number; deg: number };
}