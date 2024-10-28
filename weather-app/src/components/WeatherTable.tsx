import React from 'react';
import { FaSun, FaCloudRain, FaCloud, FaSnowflake, FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

interface WeatherData {
  date: string;
  weather: string;
  temperature: string;
}

interface WeatherTableProps {
  city: string;
  currentWeather: WeatherData | null;
  forecast: WeatherData[];
}

// Función para elegir el ícono basado en la descripción del clima
const getWeatherIcon = (weatherDescription: string) => {
  if (weatherDescription.includes('sun') || weatherDescription.includes('clear')) {
    return <FaSun className="text-yellow-500" />;
  }
  if (weatherDescription.includes('rain')) {
    return <FaCloudRain className="text-blue-500" />;
  }
  if (weatherDescription.includes('cloud')) {
    return <FaCloud className="text-gray-500" />;
  }
  if (weatherDescription.includes('snow')) {
    return <FaSnowflake className="text-blue-300" />;
  }
  return <FaCloud className="text-gray-400" />;
};

const WeatherTable: React.FC<WeatherTableProps> = ({ city, currentWeather, forecast }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 shadow-lg rounded-lg overflow-hidden mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 p-4 bg-blue-200">
        Información del Clima para {city}
      </h2>
      
      <table className="min-w-full bg-white rounded-lg border-collapse">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 border-b-2 border-blue-200 text-left text-blue-600">Fecha</th>
            <th className="px-6 py-3 border-b-2 border-blue-200 text-left text-blue-600">Clima</th>
            <th className="px-6 py-3 border-b-2 border-blue-200 text-left text-blue-600">Temperatura</th>
          </tr>
        </thead>
        <tbody>
          {currentWeather && (
            <tr className="hover:bg-blue-50">
              <td className="px-6 py-4 border-b border-blue-100">{currentWeather.date}</td>
              <td className="px-6 py-4 border-b border-blue-100">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  {getWeatherIcon(currentWeather.weather)}
                  <span>{currentWeather.weather}</span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-blue-100">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <FaTemperatureHigh className="text-red-500" />
                  <span>{currentWeather.temperature}</span>
                </div>
              </td>
            </tr>
          )}

          {forecast.length > 0 &&
            forecast.map((day, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="px-6 py-4 border-b border-blue-100">{day.date}</td>
                <td className="px-6 py-4 border-b border-blue-100">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    {getWeatherIcon(day.weather)}
                    <span>{day.weather}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-blue-100">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <FaTemperatureLow className="text-blue-500" />
                    <span>{day.temperature}</span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
