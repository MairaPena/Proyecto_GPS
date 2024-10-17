import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que App.jsx exista y esté correcto
import './index.css'; // Si no tienes este archivo, puedes eliminar esta línea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
