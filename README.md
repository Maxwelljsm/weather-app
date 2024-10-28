# 🌦️ Weather App - Clima y Previsión con Laravel, React, Redux y Tailwind CSS  

## Descripción  
Weather App es una aplicación web de clima que permite a los usuarios consultar el clima actual y la previsión meteorológica de hasta 5 días para cualquier ciudad del mundo. La aplicación está construida utilizando tecnologías modernas como Laravel para el backend y React con Redux para el frontend, junto con Tailwind CSS para un diseño responsivo y elegante.

## 🚀 Funcionalidades  
Clima Actual: Consulta las condiciones climáticas actuales de una ciudad específica ingresando el nombre de la ciudad y su código de país.
Previsión Meteorológica: Visualiza la previsión del clima para los próximos 5 días en intervalos de 3 horas.
Diseño Responsivo: La aplicación se adapta a cualquier tamaño de pantalla, garantizando una experiencia óptima en dispositivos móviles y de escritorio.
Gestión de Estado con Redux: Mejora el rendimiento y la capacidad de respuesta de la aplicación mediante la gestión de estado global con Redux.
Íconos Visuales: Utiliza íconos para representar visualmente las condiciones climáticas como lluvia, sol, nubes, y nieve.

## 🛠️ Tecnologías Utilizadas  
### Frontend  
**React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
**Redux**: Gestión de estado global de la aplicación.
**Tailwind CSS**: Framework de CSS utilitario para un diseño moderno y responsivo.

### Backend  
**Laravel**: Framework PHP para la creación de una API RESTful robusta y escalable.
**Axios**: Biblioteca de JavaScript para consumir la API Laravel desde React.

### API Externa  
**OpenWeatherMap**: API utilizada para obtener datos meteorológicos en tiempo real.

## 📋 Instalación y Ejecución  
Para ejecutar el proyecto en tu máquina local, sigue los pasos a continuación:

### Backend (Laravel)  
1.Clona el repositorio:
`$ git clone https://github.com/tuusuario/weather-app.git`

2. Navega a la carpeta del proyecto:
`$ cd weather-app`

3.Instala las dependencias de PHP:
`$ composer install`

4.Crea un archivo .env y configura tu base de datos y la API key de OpenWeatherMap:
env
`OPENWEATHER_API_KEY=tu_api_key`

5.Genera una clave de aplicación:
`$ php artisan key:generate`

6.Inicia el servidor de Laravel:
`$ php artisan serve`

### Frontend (React)  
1.Navega a la carpeta del frontend:
`$ cd client`

2.Instala las dependencias de Node.js:
`$ npm install`

3.Crea un archivo .env en el directorio del frontend y agrega la URL de tu API Laravel:
env
`VITE_API_BASE_URL=http://localhost:8000`

4.Inicia el servidor de desarrollo de React:
`$ npm run dev`

## 💻 Uso  
Introduce el nombre de la ciudad y el código del país en el formulario (por ejemplo, Madrid y ES).
Selecciona las unidades de temperatura (métrico para °C o imperial para °F).
Haz clic en Consultar Clima Actual para obtener el clima en tiempo real o Consultar Previsión para ver la previsión de los próximos 5 días.

## 📚 Documentación Adicional  

**OpenWeatherMap API**: (https://openweathermap.org/history)
**Laravel**: (https://laravel.com/docs/11.x)
**React**: (https://es.react.dev/learn)
**Redux**: (https://redux.js.org/introduction/getting-started)
**Tailwind CSS**: (https://tailwindui.com/documentation)

## 📜 Licencia  
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## FAQs  
*¿Cómo funciona la aplicación de clima?*
La aplicación permite a los usuarios consultar el clima actual y la previsión para cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

*¿Qué tipos de unidades de temperatura puedo usar?*

Métrico **(°C)**: Muestra la temperatura en grados Celsius.
Imperial **(°F)**: Muestra la temperatura en grados Fahrenheit.
Estándar **(K)**: Muestra la temperatura en Kelvin.

*¿Es la aplicación responsive?*
¡Sí! La aplicación se adapta a cualquier tamaño de pantalla, gracias a Tailwind CSS.

*¿Cómo se muestra la información de la previsión del clima?*
Se presenta en una tabla con las siguientes columnas:

|Fecha|	Clima|	Temperatura|
| --- | --- | --- |
| 28 de Oct 2024 | 🌧️ Lluvia moderada |	9.14°C |
| 29 de Oct 2024 | 🌥️ Nublado | 15.2°C |
| 30 de Oct 2024	| ❄️ Nieve ligera	 | -2.5°C |
