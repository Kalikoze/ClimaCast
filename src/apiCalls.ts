export const getWeather = async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to get weather data');
    }
    const weatherData = await response.json();
    return weatherData;
}