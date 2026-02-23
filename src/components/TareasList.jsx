import { useEffect, useState } from "react";
import { Tareas } from './Tarea';

export default function TareasList(onChangeTarea, onDeleteTarea) {

    [tareas, setTareas] = useState();

    [recargar, setRecargar] = useState(false);

    // para cargar las tareas
    useEffect(() => {
        get("ruta", (data) => setTareas(data))
        return () =>{} // Limpieza del ¿servidor?
    }, [recargar, usuario])

    return(
        <ul>
            {tareas.map((tareas) => (
                <li key={tareas.id}>
                    <Tareas tareas={tareas} onChange={onChangeTarea} onDelete={onDeleteTarea}></Tareas>
                </li>
            ))}
        </ul>
    )
}