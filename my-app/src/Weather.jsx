import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "API_KEY";

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=311f5e2f14a54375a66180538242806&q=London&aqi=no`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Real-Time Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 text-white rounded-md border border-gray-300 mb-4"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Get Weather
      </button>
      {weather && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys.country}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
  
}

export default Weather
