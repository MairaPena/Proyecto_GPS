import React from 'react';
import './App.css';
import LocationTracker from './LocationTracker'; // Importar el componente LocationTracker

const App = () => {
   return (
    <div>
      <header>
        <h1>GPS Dog Tracker</h1>
      </header>
      <main>
        <LocationTracker /> {/* Componente que muestra las coordenadas */}
      </main>
    </div>
  );
};

export default App;

