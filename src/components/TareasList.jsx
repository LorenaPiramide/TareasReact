import { useEffect, useState } from "react";
import { Tareas } from './Tarea';
import { useOutletContext } from "react-router";

export default function TareasList(onChangeTarea, onDeleteTarea) {

    [tareas, setTareas] = useState();

    [recargar, setRecargar] = useState(false);

    const [usuario, setUsuario] = useOutletContextContext();

    // para cargar las tareas
    useEffect(() => {
        get("ruta", (data) => setTareas(data))
        return () =>{} // Limpieza del ¿servidor?
    }, [recargar, usuario])

    return(
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

        
    )
}