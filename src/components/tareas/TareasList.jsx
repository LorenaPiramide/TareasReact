import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
// Función que hace el GET al servidor
import { actualizarAcabada, borrarTarea, crearTarea, obtenerTarea } from "../../servicios/peticiones";
import "./TareasList.css";

export default function TareasList() {

    const [usuario] = useOutletContext();
    const navigate = useNavigate();
    const [tareas, setTareas] = useState([]);
    const [recargar, setRecargar] = useState(false);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [tareaNueva, setTareaNueva] = useState({
        nombre: '',
        acabada: false,
        id_user: usuario.id
    });
    const [errores, setErrores] = useState({
        nombre: "",
    })
    const[errorActualizacion, setErrorActualizacion] = useState({});

    useEffect(() => {
        if (!usuario || !usuario.id) {
            navigate("/");
            return;
        }
    }, [usuario, navigate]);

    useEffect(() => {
        obtenerTarea(usuario.id).then(data => setTareas(data));
    }, [recargar, usuario]); // recargar -> Borrar/añadir tarea. usuario -> login/logout

    const cambiarCheckbox = (tarea) => {
        // Guardamos el estado original por si hay que revertir el cambio
        // const estadoOriginal = tarea.acabada;

        // Cambio visual
        const tareaActualizada = {
            ...tarea,
            acabada: !tarea.acabada
        };

        // Se actualiza el estado local
        setTareas(tareas.map(task => 
            task.id === tarea.id ? tareaActualizada : task
        ));

        const nuevosErrores = {};

        // Copia de errores que no son de esa tarea
        for (let id in errorActualizacion) {
            if (id !== tarea.id) {
                nuevosErrores[id] = errorActualizacion[id];
            }
        }

        setErrorActualizacion(nuevosErrores);

        actualizarAcabada(tarea.id, tareaActualizada).then(() => {
            console.log("Tarea actualizada correctamente.")
        }).catch(error => {
            console.log("Error al actualizar la tarea: ", error);

            // Revertimos el cambio visual
            setTareas(tareas.map(task =>
                task.id === tarea.id ? tarea : task
            ));

            setErrorActualizacion(previo => ({
                ...previo,
                [tarea.id]: `Error al actualizar la tarea "${tarea.nombre}"`
            }));
        })
    }

    if (!usuario || !usuario.id) return null;

    return(
        <>
            <div className="listaTareas">
                <h3>{usuario.nombre}, tienes estas tareas</h3>
                <button onClick={() => setMostrarForm(true)}>Añadir tarea</button>

                {mostrarForm ? (
                    <>
                        <div className="formularioNuevaTarea">
                            <div className="tareaCampoInput">
                                <input
                                    type="text"
                                    placeholder="Nombre de la tarea"
                                    value={tareaNueva.nombre}
                                    onChange={(e) => {
                                        setTareaNueva({ ...tareaNueva, nombre: e.target.value });
                                        // Es para limpiar el error cuando el usuario empieza a escribir algo
                                        if (errores.nombre) {
                                            setErrores({ ...errores, nombre: "" });
                                        }
                                    }}
                                    className={errores.nombre ? "inputError" : ""}
                                />
                            </div>

                            {errores.nombre ? <span className="tareaErrorMensaje">{errores.nombre}</span> : null}
                            <button onClick={() => {
                                if (!tareaNueva.nombre) {
                                    setErrores({ ...errores, nombre: "La tarea debe tener un nombre." });
                                    return;
                                }

                                crearTarea(tareaNueva).then(data => {
                                    setTareaNueva({
                                        nombre: '',
                                        acabada: false,
                                        id_user: String(usuario.id)
                                    });
                                    setMostrarForm(false);
                                    // Limpiamos los errores antes de enviar los datos
                                    setErrores({ ...errores, nombre: "" });
                                    setRecargar(!recargar);
                                })
                            }}>Guardar</button>
                        </div>
                    </>
                ) : <></>}

                <ul>
                    {tareas.length > 0 ? (
                        tareas.map((tarea) => (
                            <li key={tarea.id}>
                                <span>{tarea.nombre}</span>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={tarea.acabada}
                                        onChange={() => cambiarCheckbox(tarea)}
                                    />
                                    <span>Acabada</span>
                                </div>

                                <button onClick={() => {
                                    borrarTarea(tarea.id).then(() => {
                                        setRecargar(!recargar)
                                    })
                                }}>Borrar</button>
                                {/* <button>Editar</button> */}
                                {errorActualizacion[tarea.id] && (
                                    <div className="tareaErrorMensaje">
                                        <span>{errorActualizacion[tarea.id]}</span>
                                    </div>
                                )}
                            </li>
                        ))
                    ) : (
                        <p>No hay tareas pendientes.</p>
                    )}
                </ul>
            </div>
            
        </>
    )
}