import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router';
function App() {

  // opción 1
  // const [isLogged, setIsLogged] = useState(false);

  // opcion 2
  // const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario") || {}));
  const [usuario, setUsuario] = useState(
    JSON.parse(sessionStorage.getItem("usuario") || "null")
  );

  return (
    <>
      {/* <Login/> */}

      {/* Hace falta un rederizado condicional, por si está logeado sale una cosa, si no otra */}

      {/* Opción 1 */}
      {/* (isLogged ? <DatosUsuario/> : <Login/>) */}

      
      {/* Opción 2 */}
      {/* Necesita el setter que va a guardar el usuario, si vamos al loggin, es que estamos setteando el usuario, ya que aun no hay uno logeado */}
      {/* (usuario.email ? <DatosUsuario usuario={usuario} setUsuario={setUsuario}/> : <Login setUsuario={setUsuario}/>) */}


      <Navbar usuario={usuario} setUsuario={setUsuario} />
      <Outlet context={{ usuario, setUsuario }} />

      {/* Opción 2 */}
      {/* Necesita el setter que va a guardar el usuario, si vamos al loggin, es que estamos setteando el usuario, ya que aun no hay uno logeado */}
      {/* {usuario.email ? <> <DatosUsuario usuario={usuario} setUsuario={setUsuario} /> <TareasList usuario={usuario} /> </> : <Login setUsuario={setUsuario} />} */}

      {/* <TareasList usuario={usuario}/> */}

    </>
  )
}

export default App
