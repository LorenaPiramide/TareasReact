import { useOutletContext } from "react-router"

export default function Bienvenida() {

    const [usuario] = useOutletContext();

    return (
        <div>
            {usuario ? (
                <h3>Bienvenido de nuevo, {usuario.nombre}</h3>
            ) : (
                <h3>Bienvenido/a a la aplicación de tareas.</h3>
            )}
        </div>
    )
}