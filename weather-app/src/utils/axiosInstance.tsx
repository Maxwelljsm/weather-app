import axios from 'axios';

// Crear una instancia de Axios con configuración base
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Usar la URL base desde las variables de entorno
  timeout: 10000, // Tiempo de espera máximo de 10 segundos
});

// Interceptores de solicitud (request)
axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes agregar headers comunes aquí, como tokens de autenticación si los necesitas
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Manejo de errores antes de que se envíe la solicitud
    return Promise.reject(error);
  }
);

// Interceptores de respuesta (response)
axiosInstance.interceptors.response.use(
  (response) => {
    // Puedes procesar la respuesta antes de devolverla
    return response;
  },
  (error) => {
    // Manejo global de errores de respuesta
    if (error.response) {
      // El servidor respondió con un código de estado que está fuera del rango de 2xx
      console.error('Error en la respuesta de la API:', error.response);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error('Sin respuesta del servidor:', error.request);
    } else {
      // Algo sucedió al configurar la solicitud
      console.error('Error en la configuración de la solicitud:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
