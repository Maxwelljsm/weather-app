import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store/weatherStore';
import WeatherTable from './WeatherTable';

const WeatherDisplay: React.FC = () => {
  const currentWeather = useSelector((state: RootState) => state.weather.current);
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }
  // Datos de prueba si currentWeather es null
  const city = currentWeather?.city || 'Ciudad Desconocida';

  // Ajuste para asegurar que forecast sea un array de objetos WeatherData
  const forecastData = forecast.map((day: any) => ({
    date: day.date,
    weather: day.weather,
    temperature: day.temperature,
  }));

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      {currentWeather && (
        <WeatherTable
          city={city}
          currentWeather={currentWeather}
          forecast={forecastData}
        />
      )}
    </div>
  );
};

export default WeatherDisplay;
