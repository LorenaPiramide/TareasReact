import { Link } from "react-router";

// export default function Navbar({ usuario, setUsuario }) {
//     return (

//         <ul>
//             {usuario ? (
//                 <>
//                     <li><Link to="/">Inicio</Link></li>
//                     <li><Link to="/tareas">Tareas</Link></li>
//                     <li><Link to="/logout" onClick={() => {sessionStorage.removeItem("usuario"); setUsuario(null)}}>Cerrar sesión</Link></li>
//                 </>
//             ) : (
//                 <>
//                     <li><Link to="/">Inicio</Link></li>
//                     <li><Link to="/login">Login</Link></li>
//                     <li><Link to="/registro">Registro</Link></li>
//                 </>
//             )}

//         </ul>

//     )
// }

export default function Navbar({ usuario, setUsuario }) {
    return (

        <ul>

            <li><Link to="/">Inicio</Link></li>
            {usuario ? (<li><Link to="/tareas">Tareas</Link></li>) : (<li><Link to="/login">Login</Link></li>)}
            {usuario ? (<li><Link to="/logout" >Cerrar sesión</Link></li>) : (<li><Link to="/registro">Registro</Link></li>)}

        </ul>

    )
}