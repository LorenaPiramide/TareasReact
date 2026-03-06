import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
// Función que hace el GET al servidor
import { borrarTarea, crearTarea, obtenerTarea } from "../servicios/peticiones";

export default function TareasList() {

    const [usuario] = useOutletContext();
    const [tareas, setTareas] = useState([]);
    const [recargar, setRecargar] = useState(false);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [tareaNueva, setTareaNueva] = useState({
        nombre: '',
        acabada: false,
        usuarioId: usuario.id
    })

    useEffect(() => {
        obtenerTarea(usuario.id).then(data => setTareas(data));
    }, [recargar, usuario]); // recargar -> Borrar/añadir tarea. usuario -> login/logout

    return(
        <>
            <h3>{usuario.nombre}, tienes estas tareas</h3>
            <button onClick={() => setMostrarForm(true)}>Añadir tarea</button>

            {mostrarForm? (
                <>
                    <input type="text" placeholder="Nombre de la tarea" value={tareaNueva.nombre} onChange={(e) => setTareaNueva({ ...tareaNueva, nombre:e.target.value})} />
                    <button onClick={() => {
                        crearTarea(tareaNueva).then(data => {
                            setTareaNueva({});
                            setMostrarForm(false);
                            setRecargar(!recargar);
                        })
                    }}>Guardar</button>
                </>
            ): <></>}

            <ul>
                {tareas.length > 0 ? (
                    tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <span>{tarea.nombre}</span>
                            <button onClick={() => {
                                borrarTarea(tarea.id).then(() => {
                                    setRecargar(!recargar)
                                })
                            }}>Borrar</button>
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