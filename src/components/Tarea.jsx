export default function Tarea({ tarea, onDelete }) {
    return(
        <>
            <span>{tarea.nombre}</span>
            <button onClick={() => onDelete(tarea.id)}>Borrar</button>
        </>
    )
}