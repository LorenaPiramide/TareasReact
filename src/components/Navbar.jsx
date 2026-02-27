import { Link } from "react-router";

export default function Navbar({ usuario, setUsuario }) {
    return(
        <ul>
            {usuario.id}<Link to="/">Inicio</Link>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/tareas">Tareas</Link></li>
            <li><Link to="/registro">Registro</Link></li>
        </ul>
    )
}