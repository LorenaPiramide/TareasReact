import { Link, useNavigate } from "react-router";
import "./navbar.css";

export default function Navbar({ usuario, setUsuario }) {
    const navigate = useNavigate();
    const cerrarSesion = () => {
        sessionStorage.removeItem("usuario");
        setUsuario({});
        navigate("/");
    }
    return (
        <ul className="navbar">
            <Link to="/">Inicio</Link>
            {usuario.email ? (
                <>
                    <Link to="/tareas">Tareas</Link>
                    <Link to="#" onClick={cerrarSesion}>Cerrar sesión</Link>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/registro">Registro</Link>
                </>
            )}
        </ul>
    )
}