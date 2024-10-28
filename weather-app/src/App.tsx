import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <WeatherForm />
      <WeatherDisplay />
    </div>
  );
};

export default App;
