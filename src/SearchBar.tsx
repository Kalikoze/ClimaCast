import React, { useState } from 'react';

interface SearchBarProps {
  loadWeather: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ loadWeather }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);

    // Simple validation for non-empty input
    if (value.trim() === '') {
      setError('Please enter a valid city, state, or country.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== '') {
      loadWeather(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 animate-fade-in">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city, state, or country"
        className="w-full p-2 rounded-lg border-2 border-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-black"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={city.trim() === ''}
        className={`w-full p-2 rounded-lg bg-blue-500 text-white transition duration-300 ${city.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
      >
        Get Weather
      </button>
    </form>
  );
};