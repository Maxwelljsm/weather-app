<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    // Método para obtener el clima actual
    public function getCurrentWeather(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $city = $request->input('city');
        $countryCode = $request->input('country_code');
        $units = $request->input('units', 'metric'); // Unidades por defecto: métricas (Celsius)
        $apiKey = env('OPENWEATHER_API_KEY'); // Clave de API desde el archivo .env

        // Realizar la solicitud a la API de OpenWeatherMap para el clima actual
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => "{$city},{$countryCode}",
            'appid' => $apiKey,
            'units' => $units,
        ]);

        // Si la solicitud fue exitosa
        if ($response->successful()) {
            // Decodificar la respuesta JSON de la API
            $weatherData = $response->json();

            // Formatear la respuesta para devolver solo los datos necesarios
            $formattedResponse = [
                'city' => "{$weatherData['name']} ({$countryCode})", // Nombre de la ciudad y código del país
                'date' => date('M d Y', $weatherData['dt']), // Fecha formateada
                'weather' => $weatherData['weather'][0]['description'], // Descripción del clima
                'temperature' => "{$weatherData['main']['temp']}°" . ($units === 'metric' ? 'C' : 'F') // Temperatura con unidad
            ];

            // Devolver la respuesta formateada en formato JSON
            return response()->json($formattedResponse);
        }

        // Si la solicitud falló, devolver un error en formato JSON
        return response()->json(['error' => 'No se pudo obtener el clima actual.'], 500);
    }

    public function getWeatherForecast(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $city = $request->input('city');
        $countryCode = $request->input('country_code');
        $days = $request->input('days', 5); // Número de días (por defecto: 5)
        $units = $request->input('units', 'metric'); // Unidades por defecto: métricas (Celsius)
        $apiKey = env('OPENWEATHER_API_KEY'); // Clave de API desde el archivo .env
    
        // Realizar la solicitud a la API de OpenWeatherMap para la previsión del clima
        $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
            'q' => "{$city},{$countryCode}",
            'appid' => $apiKey,
            'units' => $units,
        ]);
    
        // Si la solicitud fue exitosa
        if ($response->successful()) {
            // Decodificar la respuesta JSON de la API
            $forecastData = $response->json();
            $groupedForecast = [];
    
            // Iterar sobre la lista de datos de previsión
            foreach ($forecastData['list'] as $entry) {
                // Extraer la fecha sin la hora para agrupar por día
                $date = date('Y-m-d', strtotime($entry['dt_txt']));
                // Agregar la entrada al grupo correspondiente
                $groupedForecast[$date][] = $entry;
            }
    
            // Formatear las previsiones agrupadas para mostrar solo una entrada por día
            $formattedForecast = [];
            foreach ($groupedForecast as $date => $entries) {
                // Seleccionar la entrada del mediodía o la más cercana al mediodía
                $middayEntry = $this->selectMiddayEntry($entries);
    
                $formattedForecast[] = [
                    'date' => date('M d Y', strtotime($middayEntry['dt_txt'])), // Fecha formateada
                    'weather' => $middayEntry['weather'][0]['description'], // Descripción del clima
                    'temperature' => "{$middayEntry['main']['temp']}°" . ($units === 'metric' ? 'C' : 'F') // Temperatura con unidad
                ];
            }
    
            // Formatear la respuesta final con la ciudad y la lista de previsiones
            $formattedResponse = [
                'city' => "{$forecastData['city']['name']} ({$countryCode})", // Nombre de la ciudad y código del país
                'forecast' => array_slice($formattedForecast, 0, $days) // Limitar la lista al número de días solicitados
            ];
    
            // Devolver la respuesta formateada en formato JSON
            return response()->json($formattedResponse);
        }
    
        // Si la solicitud falló, devolver un error en formato JSON
        return response()->json(['error' => 'No se pudo obtener la previsión del clima.'], 500);
    }
    
    // Método auxiliar para seleccionar la entrada más cercana al mediodía (12:00)
    private function selectMiddayEntry($entries)
    {
        $middayTime = '12:00:00';
        $selectedEntry = $entries[0];
        $closestDifference = PHP_INT_MAX;
    
        foreach ($entries as $entry) {
            $entryTime = date('H:i:s', strtotime($entry['dt_txt']));
            $difference = abs(strtotime($entryTime) - strtotime($middayTime));
    
            if ($difference < $closestDifference) {
                $closestDifference = $difference;
                $selectedEntry = $entry;
            }
        }
    
        return $selectedEntry;
    }
    
}
