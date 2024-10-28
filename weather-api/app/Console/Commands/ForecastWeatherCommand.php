<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\WeatherController;
use Illuminate\Http\Request;

class ForecastWeatherCommand extends Command
{
    // Definición de la firma del comando: parámetros obligatorios (city y countryCode) y opciones (days y units)
    protected $signature = 'forecast {city} {countryCode} {--days=5} {--units=metric}';
    protected $description = 'Obtiene la previsión del clima para una ciudad y país específicos para los próximos días';

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
        $city = $this->argument('city');
        $countryCode = $this->argument('countryCode');
        $days = $this->option('days');
        $units = $this->option('units');

        // Crear una instancia de Request simulada con los parámetros recibidos
        $request = new Request([
            'city' => $city,
            'country_code' => $countryCode,
            'days' => $days,
            'units' => $units,
        ]);

        // Llamar al método del controlador WeatherController para obtener la previsión del clima
        $response = $this->weatherController->getWeatherForecast($request);

        // Verificar si la respuesta es exitosa (código de estado 200)
        if ($response->getStatusCode() === 200) {
            $forecastData = $response->getData(); // Obtener los datos de la respuesta

            // Acceder a las propiedades del objeto: ciudad y lista de previsiones
            $cityName = $forecastData->city ?? 'Desconocido'; // Nombre de la ciudad o "Desconocido" si no está disponible
            $forecastList = $forecastData->forecast ?? []; // Lista de previsiones o array vacío si no está disponible

            // Mostrar la información de la ciudad
            $this->info("Previsión del clima para {$cityName}:");
            $this->info("===================================");

            // Iterar sobre la lista de previsiones y mostrar la información de cada día
            foreach ($forecastList as $day) {
                $date = $day->date ?? 'Sin fecha'; // Fecha o "Sin fecha" si no está disponible
                $weather = $day->weather ?? 'Sin información'; // Clima o "Sin información" si no está disponible
                $temperature = $day->temperature ?? 'N/A'; // Temperatura o "N/A" si no está disponible

                // Mostrar la información del día
                $this->info("Fecha: " . $date);
                $this->info("Clima: " . $weather);
                $this->info("Temperatura: " . $temperature);
                $this->info("-------------");
            }
        } else {
            // Si la solicitud falló, mostrar un mensaje de error
            $this->error('No se pudo obtener la previsión del clima.');
        }
    }
}
