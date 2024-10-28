import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer, // Asignar el reducer importado
  },
});

// Tipos para el estado global y el dispatch de la aplicación
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
