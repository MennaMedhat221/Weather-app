import React, { useState } from 'react';
import SearchForm from './SearchForm';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = "b137a21f0cc9e34f5e439eb33b2409fc";
  
    const fetchWeather = async (city) => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('City not found');
        }
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError('City not found. Please check the spelling and try again.');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-white drop-shadow-md">Welcome to Weather App</h1>
        
        <SearchForm onSearch={fetchWeather} />
        
        {loading && (
          <div className="mt-8 bg-white bg-opacity-80 rounded-lg p-8 text-center shadow-md">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-4 text-lg text-gray-700">Loading weather data...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-5 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        {!loading && !error && weatherData && (
          <WeatherDetails weatherData={weatherData} />
        )}
        
        {!weatherData && !loading && !error && (
          <div className="mt-12 text-center text-white text-opacity-80">
            <p className="text-lg">Enter a city name to get the current weather</p>
          </div>
        )}
      </div>
    );
  };
export default WeatherApp;