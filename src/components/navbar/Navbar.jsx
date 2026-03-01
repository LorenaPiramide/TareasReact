import { Link } from "react-router";

export default function Navbar({ usuario, setUsuario }) {
    return (

        <ul>
            <Link to="/">Inicio</Link>
            {usuario ? (<Link to="/tareas">Tareas</Link>) : (<Link to="/login">Login</Link>)}
            {usuario ? (
                <Link to="/" onClick={() => {
                    sessionStorage.removeItem("usuario"); setUsuario(null)
                }} >Cerrar sesión</Link>
            ) : (
                <Link to="/registro">Registro</Link>)}
        </ul>

    )
}