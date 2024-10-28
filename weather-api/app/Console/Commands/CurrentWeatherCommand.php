<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\WeatherController;
use Illuminate\Http\Request;

class CurrentWeatherCommand extends Command
{
    // Definición de la firma del comando: parámetros obligatorios (city y countryCode) y una opción (units)
    protected $signature = 'current {city} {countryCode} {--units=metric}';
    protected $description = 'Obtiene el clima actual para una ciudad y país específicos';

    protected $weatherController;

    // Constructor para inyectar el controlador WeatherController
    public function __construct(WeatherController $weatherController)
    {
        parent::__construct();
        $this->weatherController = $weatherController;
    }

    // Método que se ejecuta cuando se llama al comando
    public function handle()
    {
        // Obtener los argumentos y opciones proporcionados en la llamada al comando
        $city = $this->argument('city'); // Ciudad proporcionada como argumento
        $countryCode = $this->argument('countryCode'); // Código del país proporcionado como argumento
        $units = $this->option('units'); // Unidades (métrico o imperial), por defecto 'metric'

        // Crear una instancia de Request simulada con los parámetros recibidos
        $request = new Request([
            'city' => $city,
            'country_code' => $countryCode,
            'units' => $units,
        ]);

        // Llamar al método del controlador WeatherController para obtener el clima actual
        $response = $this->weatherController->getCurrentWeather($request);

        // Verificar si la respuesta es exitosa (código de estado 200)
        if ($response->getStatusCode() === 200) {
            $weatherData = $response->getData(); // Obtener los datos de la respuesta

            // Acceder a las propiedades del objeto: descripción del clima y temperatura
            $weatherDescription = $weatherData->weather ?? 'No disponible'; // Descripción del clima o "No disponible" si no está
            $temperature = $weatherData->temperature ?? 'N/A'; // Temperatura o "N/A" si no está disponible

            // Mostrar la información del clima en la consola
            $this->info("Clima actual en {$city} ({$countryCode}): " . $weatherDescription);
            $this->info("Temperatura: " . $temperature);
        } else {
            // Si la solicitud falló, mostrar un mensaje de error
            $this->error('No se pudo obtener el clima actual.');
        }
    }
}
