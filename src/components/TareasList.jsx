import { useEffect, useState } from "react";
import { Tarea } from './Tarea';
// Función que hace el GET al servidor
import { borrarTarea, obtenerTarea } from "../servicios/peticiones";

export default function TareasList({ usuario }) {

    // Pedir tareas del usuario al servidor. Array vacío dentro porque el servidor devuelve un array
    [tareas, setTareas] = useState([]);

    // Forzar que se vuelvan a pedir las tareas. Carga los datos de nuevo cuando ha habido un cambio en las tareas. Ahora mismo no se usa el setRecargar porque no hay borrado
    [recargar, setRecargar] = useState(false);

    // Para cargar las tareas. Ejecuta código cuando pasa algo
    useEffect(() => {

        obtenerTarea(usuario.id)
            .then(data => setTareas(data)); // data -> Array de tareas. Se guardan en estado setTareas

    }, [recargar, usuario]); // recargar -> Borrar/añadir tarea. usuario -> login/logout

    // TODO: para borrar una tarea, habría que poner una función borrarTarea y pasar el id de la tarea por parámetro
    

    return(
        <ul>
            {tareas.map(tarea => (
                <li key={tarea.id}>
                    <Tarea tarea={tarea} onDelete={() => borrarTarea(idTarea)}></Tarea>
                </li>
            ))}
        </ul>
    )
}