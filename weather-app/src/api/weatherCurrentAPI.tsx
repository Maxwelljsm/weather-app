import axiosInstance from '../utils/axiosInstance';
import { API_URLS } from '../utils/config';

// Función para obtener el clima actual
export const fetchCurrentWeather = async (city: string, countryCode: string, units: string) => {
  try {
    const response = await axiosInstance.get(API_URLS.WEATHER_CURRENT, {
      params: {
        city,
        country_code: countryCode,
        units,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el clima actual:', error);
    throw new Error('Error fetching current weather');
  }
};

