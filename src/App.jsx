import { useState, useEffect } from 'react'
import Consultas from './components/Consultas';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=fe4ed6407da8fdf33dce908d359ef45a')
        .then(res=>res.json())
            .then(json=>{setDatos(json)})
            console.log(datos)
},[]);

useEffect(()=>{
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=fe4ed6407da8fdf33dce908d359ef45a')
      .then(res=>res.json())
          .then(json=>{setDatos(json)})
          console.log(datos)
},[]);

  return (
    <>
    <div>
      <Consultas/>
      <h1>Hola Mundo!</h1>
    </div>  
    </>
  )
}

export default App
