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
        const tareaActualizada = {
            ...tarea,
            acabada: !tarea.acabada
        };

        actualizarAcabada(tarea.id, tareaActualizada).then(() => {
            setTareas(tareas.map(task => 
                task.id === tarea.id ? tareaActualizada : task
            ));
        });
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