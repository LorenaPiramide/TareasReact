import { Link, useNavigate } from "react-router";
import "./navbar.css";

export default function Navbar({ usuario, setUsuario }) {
    const navigate = useNavigate();
    return (
        <ul className="navbar">
            <Link to="/">Inicio</Link>
            {usuario.email? (<Link to="/tareas">Tareas</Link>) : (<Link to="/login">Login</Link>)}
            {usuario.email? (
                <Link onClick={() => {
                    sessionStorage.removeItem("usuario");
                    setUsuario({});
                    navigate("/");
                }}>Cerrar sesión</Link>
            ) : (
                <Link to="/registro">Registro</Link>)}
        </ul>
    )
}