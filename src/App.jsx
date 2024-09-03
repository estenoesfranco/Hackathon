import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=fe4ed6407da8fdf33dce908d359ef45a')
        .then(res=>res.json())
            .then(json=>{setProductos(json)})
            console.log(productos)
},[]);

  return (
    <>
    <div>
      <h1>Hola Mundo!</h1>
    </div>
    </>
  )
}

export default App
