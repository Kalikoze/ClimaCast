import { useState } from 'react'

export const SearchBar = ({ loadWeather }: { loadWeather: (city: string) => Promise<void> }): JSX.Element => {
  const [city, setCity] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadWeather(city);
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className="h-4/5 flex w-3/4 justify-center">
      <input
        id="city"
        className="w-4/12 border-2 border-gray-300 h-16 mx-4 rounded-xl w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="city"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="w-2/12 bg-blue-500 text-white h-16 p-2 rounded-xl w-1/4"
      >
        Search
      </button>
    </form>
  )
}