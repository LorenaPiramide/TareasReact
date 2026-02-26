import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Tareas } from './Tarea';
import { useOutletContext } from "react-router";
=======
import Tarea from "./Tarea";
// Función que hace el GET al servidor
import { borrarTarea, obtenerTarea } from "../servicios/peticiones";
>>>>>>> 32eeab95d7e1fc94a974bac9c61395d83dbcbaad

export default function TareasList({ usuario }) {

    // Pedir tareas del usuario al servidor. Array vacío dentro porque el servidor devuelve un array
    const [tareas, setTareas] = useState([]);

    // Forzar que se vuelvan a pedir las tareas. Carga los datos de nuevo cuando ha habido un cambio en las tareas. Ahora mismo no se usa el setRecargar porque no hay borrado
    const [recargar, setRecargar] = useState(false);

<<<<<<< HEAD
    const [usuario, setUsuario] = useOutletContextContext();

    // para cargar las tareas
=======
    // Para cargar las tareas. Ejecuta código cuando pasa algo
>>>>>>> 32eeab95d7e1fc94a974bac9c61395d83dbcbaad
    useEffect(() => {

        obtenerTarea(usuario.id)
            .then(data => setTareas(data)); // data -> Array de tareas. Se guardan en estado setTareas

    }, [recargar, usuario]); // recargar -> Borrar/añadir tarea. usuario -> login/logout

    // TODO: para borrar una tarea, habría que poner una función borrarTarea y pasar el id de la tarea por parámetro
    

    return(
<<<<<<< HEAD
        <>
            <h3>{usuario.nombre}, tienes estas tareas</h3>

            <button>Añadir tarea</button>

            <ul>
                {tareas.map((tareas) => (
                    <li key={tareas.id}>
                        <Tareas tareas={tareas} onChange={onChangeTarea} onDelete={onDeleteTarea}></Tareas>
                    </li>
                ))}
            </ul>
        </>

        
=======
        <ul>
            {tareas.map(tarea => (
                <li key={tarea.id}>
                    <Tarea tarea={tarea} onDelete={() => borrarTarea(tarea.id)}></Tarea>
                </li>
            ))}
        </ul>
>>>>>>> 32eeab95d7e1fc94a974bac9c61395d83dbcbaad
    )
}