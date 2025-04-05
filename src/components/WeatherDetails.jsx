import React from 'react';
import weatherImage from '../assets/weather.avif'

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-white text-blue-400 py-4 px-6">
        <h2 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
      </div>
      
      <div className="p-6 bg-cover bg-center " style={{ backgroundImage: `url(${weatherImage})` }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-20 h-20 mr-2"
            />
            <div>
              <p className="text-5xl font-bold text-black">{Math.round(weatherData.main.temp)}°C</p>
              <p className="text-gray-600 capitalize">{weatherData.weather[0].description}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-black">Feels like</p>
            <p className="text-xl font-semibold text-black">{Math.round(weatherData.main.feels_like)}°C</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-gray-50 p-4 rounded-lg text-blue-300">
            <p className="text-gray-500 mb-1">Humidity</p>
            <p className="text-xl font-semibold">{weatherData.main.humidity}%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-blue-300">
            <p className="text-gray-500 mb-1">Wind</p>
            <p className="text-xl font-semibold">{weatherData.wind.speed} m/s</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-blue-300">
            <p className="text-gray-500 mb-1">Pressure</p>
            <p className="text-xl font-semibold">{weatherData.main.pressure} hPa</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-blue-300">
            <p className="text-gray-500 mb-1">Visibility</p>
            <p className="text-xl font-semibold">{(weatherData.visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;