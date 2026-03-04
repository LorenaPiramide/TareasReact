import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router';
function App() {

  // <button onClick={() => navigate("/")}>Ir a inicio</button>

  const [usuario, setUsuario] = useState(
    JSON.parse(sessionStorage.getItem("usuario") || "null")
  );

  return (
    <>
      <Navbar usuario={usuario} setUsuario={setUsuario} />
      {/* main es para poder meterle estilos directamente, sin necesidad de envolverlo en un div */}
      <main>
        <Outlet context={[ usuario, setUsuario ]} />
      </main>
    </>
  )
}

export default App
