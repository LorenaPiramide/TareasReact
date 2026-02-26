import { Link } from "react-router";

export default function Navbar() {
    return(
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/tareas">Tareas</Link></li>
        </ul>
    )
}