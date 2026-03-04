import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
// Función que hace el GET al servidor
import { borrarTarea, obtenerTarea } from "../servicios/peticiones";

export default function TareasList() {

    const [usuario] = useOutletContext();
    const [tareas, setTareas] = useState([]);
    const [recargar, setRecargar] = useState(false);

    useEffect(() => {
        obtenerTarea(usuario.id)
            .then(data => setTareas(data));
    }, [recargar, usuario]); // recargar -> Borrar/añadir tarea. usuario -> login/logout
    

    return(
        <>
            <h3>{usuario.nombre}, tienes estas tareas</h3>
            <button>Añadir tarea</button>

            <ul>
                {tareas.length > 0 ? (
                    tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <span>{tarea.nombre}</span> 
                            {/* <button onClick={() => onDelete(tarea.id)}>Borrar</button> */}
                            <button>Editar</button>
                        </li>
                    ))
                ) : (
                    <p>No hay tareas pendientes.</p>
                )}
            </ul>
        </>
    )
}