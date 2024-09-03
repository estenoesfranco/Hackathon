import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [datos, setDatos] = useState(null);
  const [fondoColor, setFondoColor] = useState('white');
  
  const buscarClima = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=fe4ed6407da8fdf33dce908d359ef45a`)
      .then(res => {
        setDatos(res.data);
        cambiarColorFondo(res.data.weather[0].main); // Cambia el color de fondo según el clima
        console.log(res.data);
      })
      .catch(err => {
        console.error("Error fetching weather data:", err);
      });
  };

  useEffect(()=>{
    axios
      .get(`https://api.ipgeolocation.io/ipgeo?apiKey=f86f028bed07497cae6f5443050849a4`)
      .then(res => {
        setDatos(res.data.country_name);
        cambiarColorFondo(res.data.weather[0].main); // Cambia el color de fondo según el clima
        console.log(res.data);
      })
      .catch(err => {
        console.error("Error fetching weather data:", err);
      });
},[]);

  

  const cambiarColorFondo = (clima) => {
    switch(clima.toLowerCase()) {
      case 'clear':
        setFondoColor('#87CEEB'); // Cielo despejado
        break;
      case 'clouds':
        setFondoColor('#B0C4DE'); // Nublado
        break;
      case 'rain':
      case 'drizzle':
        setFondoColor('#778899'); // Lluvia ligera
        break;
      case 'thunderstorm':
        setFondoColor('#2F4F4F'); // Tormenta
        break;
      case 'snow':
        setFondoColor('#FFFFFF'); // Nieve
        break;
      default:
        setFondoColor('#D3D3D3'); // Clima no especificado
        break;
    }
  };

  const IngresarUbicacion = (event) => {
    setCiudad(event.target.value);
  };

  return (
    <div style={{ backgroundColor: fondoColor, minHeight: '100vh', padding: '20px' }}>
      <nav className="navbar">
        <h1>Noob</h1>
        <ul>
          <li>
            <button onClick={buscarClima}>Buscar Clima</button>
          </li>
        </ul>
      </nav>
      
      <input type="text" onChange={IngresarUbicacion} placeholder="Ingrese una ciudad" />

      {datos && (
        <div className="weather-info">
          <h2>{datos.name}</h2>
          <p>Temperatura: {Math.round(datos.main.temp - 273.15)}°C</p>
          <p>Clima: {datos.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
