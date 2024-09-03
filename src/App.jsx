import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [datos, setDatos] = useState(null);
  const [fondoColor, setFondoColor] = useState('white')
  const [modoOscuro, setModoOscuro] = useState(false); 
  const [historial, setHistorial]=useState('');

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro); 
  };
;

  

  const buscarClima = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=fe4ed6407da8fdf33dce908d359ef45a`)
      .then(res => {
        setDatos(res.data);
        cambiarColorFondo(res.data.weather[0].main);
        console.log(res.data);
      })
      .catch(err => {
        console.error("Error fetching weather data:", err);
      });
      
  };

  const cambiarColorFondo = (clima) => {
    switch (clima.toLowerCase()) {
      case 'clear':
        setFondoColor('#87CEEB');
        break;
      case 'clouds':
        setFondoColor('#B0C4DE');
        break;
      case 'rain':
      case 'drizzle':
        setFondoColor('#778899');
        break;
      case 'thunderstorm':
        setFondoColor('#2F4F4F');
        break;
      case 'snow':
        setFondoColor('#FFFFFF');
        break;
      default:
        setFondoColor('#D3D3D3');
        break;
    }
  };

  const ingresarUbicacion = (event) => {
    setCiudad(event.target.value);
  };

  
  return (
    <div className={`container ${modoOscuro ? 'dark-mode' : ''}`} style={{ backgroundColor: fondoColor }}>
      <nav className="navbar">
        <h1>Noobes</h1>
        <ul>
          <li className="responsive-button">
            <button onClick={buscarClima}>Buscar Clima</button>
          </li>
          <li className="responsive-button">
            <button onClick={toggleModoOscuro}>
              {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
          </li>
        </ul>
      </nav>

      <input type="text" onChange={ingresarUbicacion} placeholder="Ingrese una ciudad" />

      {datos && (
        <div className="weather-info">
          <h2>{datos.name}</h2>
          <p>Temperatura: {Math.round(datos.main.temp - 273.15)}°C</p>
          <p>Clima: {datos.weather[0].description}</p>
          <p>Humedad: {datos.weather[0].description}</p>
          <p>Velocidad del viento: {datos.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
export default App
