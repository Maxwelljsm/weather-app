import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentWeather } from '../../api/weatherCurrentAPI';
import { fetchWeatherForecast } from '../../api/weatherForecastAPI';

// Definición del estado inicial y tipos
interface WeatherState {
  current: any;
  forecast: any[];
  currentStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  forecastStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  currentError: string | null;
  forecastError: string | null;
}

const initialState: WeatherState = {
  current: null,
  forecast: [],
  currentStatus: 'idle',
  forecastStatus: 'idle',
  currentError: null,
  forecastError: null,
};

// Thunk para obtener el clima actual
export const fetchCurrentWeatherAsync = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (params: { city: string; countryCode: string; units: string }) => {
    const response = await fetchCurrentWeather(params.city, params.countryCode, params.units);
    return response;
  }
);

// Thunk para obtener la previsión del clima
export const fetchForecastWeatherAsync = createAsyncThunk(
  'weather/fetchForecastWeather',
  async (params: { city: string; countryCode: string; units: string; days: number }) => {
    const response = await fetchWeatherForecast(params.city, params.countryCode, params.units, params.days);
    return response;
  }
);

// Definición del slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Casos para el clima actual
      .addCase(fetchCurrentWeatherAsync.pending, (state) => {
        state.currentStatus = 'loading';
        state.currentError = null;
        state.current = null;
      })
      .addCase(fetchCurrentWeatherAsync.fulfilled, (state, action) => {
        state.current = action.payload;
        state.currentStatus = 'succeeded';
      })
      .addCase(fetchCurrentWeatherAsync.rejected, (state, action) => {
        state.currentStatus = 'failed';
        state.currentError = action.error.message || 'Error fetching current weather';
      })

      // Casos para la previsión del clima
      .addCase(fetchForecastWeatherAsync.pending, (state) => {
        state.forecastStatus = 'loading';
        state.forecastError = null;
        state.forecast = []; 
      })
      .addCase(fetchForecastWeatherAsync.fulfilled, (state, action) => {
        state.forecast = action.payload.forecast;
        state.forecastStatus = 'succeeded';
      })
      .addCase(fetchForecastWeatherAsync.rejected, (state, action) => {
        state.forecastStatus = 'failed';
        state.forecastError = action.error.message || 'Error fetching weather forecast';
      });
  },
});

// Exportar el reducer por defecto
export default weatherSlice.reducer;
