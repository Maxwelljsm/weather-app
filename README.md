🌦️ Weather App - Clima y Previsión con Laravel, React, Redux y Tailwind CSS
Descripción
Weather App es una aplicación web de clima que permite a los usuarios consultar el clima actual y la previsión meteorológica de hasta 5 días para cualquier ciudad del mundo. Esta aplicación está construida utilizando tecnologías modernas como Laravel para el backend y React con Redux para el frontend, junto con Tailwind CSS para un diseño responsivo y elegante.

🚀 Funcionalidades
Clima Actual: Permite a los usuarios consultar las condiciones climáticas actuales de una ciudad específica ingresando el nombre de la ciudad y su código de país.
Previsión Meteorológica: Los usuarios pueden ver la previsión meteorológica para los próximos 5 días en intervalos de 3 horas, brindando detalles sobre temperatura y condiciones del clima.
Diseño Responsivo: La aplicación se adapta a diferentes tamaños de pantalla, garantizando una experiencia de usuario óptima tanto en dispositivos móviles como en escritorio.
Gestión de Estado con Redux: Los datos del clima se gestionan de manera eficiente usando Redux, mejorando el rendimiento y la capacidad de respuesta de la aplicación.
Íconos Interactivos: La aplicación utiliza íconos para representar visualmente las condiciones climáticas (lluvia, sol, nubes, nieve, etc.) para una experiencia visual enriquecida.
🛠️ Tecnologías Utilizadas
Frontend
React: Biblioteca de JavaScript para construir interfaces de usuario.
Redux: Para la gestión de estado global de la aplicación.
Tailwind CSS: Framework de CSS utilitario para un diseño moderno y responsivo.
Backend
Laravel: Framework PHP para la creación de una API RESTful.
Axios: Biblioteca de JavaScript para consumir la API de Laravel desde React.
API Externa
OpenWeatherMap: API utilizada para obtener datos meteorológicos en tiempo real.
📋 Instalación y Ejecución
Backend (Laravel)
Clona el repositorio:
bash
Copiar código
git clone https://github.com/tuusuario/weather-app.git
Navega a la carpeta del proyecto:
bash
Copiar código
cd weather-app
Instala las dependencias de PHP:
bash
Copiar código
composer install
Crea un archivo .env y configura tu base de datos y la API key de OpenWeatherMap:
env
Copiar código
OPENWEATHER_API_KEY=tu_api_key
Genera una clave de aplicación:
bash
Copiar código
php artisan key:generate
Inicia el servidor de Laravel:
bash
Copiar código
php artisan serve
Frontend (React)
Navega a la carpeta del frontend:
bash
Copiar código
cd client
Instala las dependencias de Node.js:
bash
Copiar código
npm install
Crea un archivo .env en el directorio del frontend y agrega la URL de tu API Laravel:
env
Copiar código
VITE_API_BASE_URL=http://localhost:8000
Inicia el servidor de desarrollo de React:
bash
Copiar código
npm run dev
💻 Uso
En la página principal, introduce el nombre de la ciudad y el código del país (por ejemplo, Madrid y ES).
Selecciona las unidades (métrico para °C o imperial para °F).
Haz clic en Consultar Clima Actual para obtener el clima en tiempo real o Consultar Previsión para ver la previsión de los próximos 5 días.
📚 Documentación Adicional
OpenWeatherMap API: Documentación de la API
Laravel: Documentación oficial de Laravel
React: Documentación oficial de React
Redux: Documentación de Redux
Tailwind CSS: Documentación de Tailwind CSS
📜 Licencia
Este proyecto está bajo la licencia MIT. Puedes consultar el archivo LICENSE para más detalles.
