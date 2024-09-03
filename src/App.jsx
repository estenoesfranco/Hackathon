import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ubicacion, setUbicacion] = useState('');
  const [datos, setDatos] = useState(null);

  const buscarClima = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=fe4ed6407da8fdf33dce908d359ef45a`)
      .then(res => {
        setDatos(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error("Error fetching weather data:", err);
      });
  };

  const ingresarUbicacion = (event) => {
    setUbicacion(event.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <h1>Weather App</h1>
        <ul>
          <li>
            <button onClick={buscarClima}>Buscar Clima</button>
          </li>
        </ul>
      </nav>
      
      <div className="content">
        <input 
          type="text" 
          onChange={ingresarUbicacion} 
          placeholder="Ingrese ciudad, país o provincia" 
        />

        {datos && (
          <div className="weather-info">
            <h2>{datos.name}</h2>
            <p>Temperatura: {Math.round(datos.main.temp - 273.15)}°C</p>
            <p>Clima: {datos.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
