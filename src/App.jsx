import { useState } from 'react'
import './App.css'
import TareasList from './components/TareasList'
import Login from './components/Login'
import DatosUsuario from './components/DatosUsuario'
function App() {

  // opción 1
  // const [isLogged, setIsLogged] = useState(false);

  // opcion 2
  // const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario") || {}));
  const [usuario, setUsuario] = useState(
    JSON.parse(sessionStorage.getItem("usuario") || "null") || {} // Si JSON.parse devuelve null || {} lo convierte a objeto vacío
  );

  //useState(false), pero ha puesto lo del sesionStorage por si ya hay sesión iniciada, si no encuentra el usuario, le ponemos el usuario vacío

  return (
    <>
      {/* <Login/> */}

      {/* Hace falta un rederizado condicional, por si está logeado sale una cosa, si no otra */}

      {/* Opción 1 */}
      {/* (isLogged ? <DatosUsuario/> : <Login/>) */}

      {/* Opción 2 */}
      {/* Necesita el setter que va a guardar el usuario, si vamos al loggin, es que estamos setteando el usuario, ya que aun no hay uno logeado */}
      {usuario.email ? <> <DatosUsuario usuario={usuario} setUsuario={setUsuario} /> <TareasList usuario={usuario} /> </> : <Login setUsuario={setUsuario} />}

      {/* <TareasList usuario={usuario}/> */}
    </>
  )
}

export default App
