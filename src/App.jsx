import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [datos, setDatos] = useState(null)

  useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Loon&appid=fe4ed6407da8fdf33dce908d359ef45a')
            .then(res=>{setDatos(res.data)})
            console.log(datos)
},[]);

  
  return (
    <>
    <div>
      <h1>¡Hola mundo!</h1>
    </div>
    </>
  )
}

export default App