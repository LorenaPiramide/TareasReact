import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router';
function App() {

  // opcion 2
  // const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario") || {}));

  // <button onClick={() => navigate("/")}>Ir a inicio</button>

  // const [usuario, setUsuario] = useState(
  //   JSON.parse(sessionStorage.getItem("usuario") || "null")
  // );

  // FIXME: prueba para el usuario
  const [usuario, setUsuario] = useState({nombre: "patata"});

  return (
    <>
      
      {/* Opción 2 */}
      {/* Necesita el setter que va a guardar el usuario, si vamos al loggin, es que estamos setteando el usuario, ya que aun no hay uno logeado */}
      {/* (usuario.email ? <DatosUsuario usuario={usuario} setUsuario={setUsuario}/> : <Login setUsuario={setUsuario}/>) */}


      <Navbar usuario={usuario} setUsuario={setUsuario} />
      <Outlet context={{ usuario, setUsuario }} />

      {/* Opción 2 */}
      {/* Necesita el setter que va a guardar el usuario, si vamos al loggin, es que estamos setteando el usuario, ya que aun no hay uno logeado */}
      {/* {usuario.email ? <> <DatosUsuario usuario={usuario} setUsuario={setUsuario} /> <TareasList usuario={usuario} /> </> : <Login setUsuario={setUsuario} />} */}

    </>
  )
}

export default App
