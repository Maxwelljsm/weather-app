import axiosInstance from '../utils/axiosInstance';
import { API_URLS } from '../utils/config';

// Función para obtener la previsión del clima
export const fetchWeatherForecast = async (city: string, countryCode: string, units: string, days: number) => {
    try {
      const response = await axiosInstance.get(API_URLS.WEATHER_FORECAST, {
        params: {
          city,
          country_code: countryCode,
          units,
          days,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener la previsión del clima:', error);
      throw new Error('Error fetching weather forecast');
    }
  };
  