import React from 'react';
import './Card.css';

function Card({ location, temp, feelsLike, tempMax, tempMin, humidity, description }) {
return (
    <div className="weather-card">
        <h2>{location}</h2>
        <p>Temperatura: {temp}°C</p>
        <p>Sensación Térmica: {feelsLike}°C</p>
        <p>Máxima: {tempMax}°C</p>
        <p>Mínima: {tempMin}°C</p>
        <p>Humedad: {humidity}%</p>
        <p>Clima: {description}</p>
    </div>
);
}

export default Card;