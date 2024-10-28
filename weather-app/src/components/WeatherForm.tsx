import React, { useState } from 'react';
import { useAppDispatch } from '../utils/hooks/hook';
import { fetchCurrentWeatherAsync, fetchForecastWeatherAsync } from '../features/weather/weatherSlice';
import { FaSun, FaCloudSunRain } from 'react-icons/fa';

const WeatherForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [units, setUnits] = useState('metric');
  const dispatch = useAppDispatch();

  // Acción para obtener el clima actual
  const handleCurrentWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!city.trim() || !countryCode.trim()) {
      alert('Por favor, ingrese una ciudad y un código de país válidos.');
      return;
    }

    dispatch(fetchCurrentWeatherAsync({ city: city.trim(), countryCode: countryCode.trim().toUpperCase(), units }));
  };

  // Acción para obtener la previsión del clima
  const handleForecastWeather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!city.trim() || !countryCode.trim()) {
      alert('Por favor, ingrese una ciudad y un código de país válidos.');
      return;
    }

    dispatch(fetchForecastWeatherAsync({ city: city.trim(), countryCode: countryCode.trim().toUpperCase(), units, days: 5 }));
  };

  return (
    <form className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 flex items-center">
        <FaSun className="mr-2 text-yellow-500" /> Consulta el Clima
      </h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1">
          <label className="block mb-1 text-gray-600">Ciudad:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Ej. Madrid"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1 text-gray-600">Código del País:</label>
          <input
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Ej. ES"
            maxLength={2}
            required
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1 text-gray-600">Unidades:</label>
          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="metric">Métrico (°C)</option>
            <option value="imperial">Imperial (°F)</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCurrentWeather}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <FaSun className="mr-2" /> Clima Actual
        </button>
        <button
          onClick={handleForecastWeather}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaCloudSunRain className="mr-2" /> Previsión
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
