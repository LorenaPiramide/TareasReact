import { Link } from "react-router";
import "./navbar.css";

export default function Navbar({ usuario, setUsuario }) {
    return (
        <ul className="navbar">
            <Link to="/">Inicio</Link>
            {usuario.email? (<Link to="/tareas">Tareas</Link>) : (<Link to="/login">Login</Link>)}
            {usuario.email? (
                <Link to="/" onClick={() => {
                    sessionStorage.removeItem("usuario");
                    setUsuario(null)
                }}>Cerrar sesión</Link>
            ) : (
                <Link to="/registro">Registro</Link>)}
        </ul>
    )
}