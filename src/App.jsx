import { useState } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import './index.css'
const App = () => {
  return (
    <div className="min-h-screen h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
    <WeatherApp />
    <p className="mt-8 text-blue text-opacity-70 text-sm">Data provided by OpenWeatherMap</p>
  </div>
  )
  }
export default App
