export default function DatosUsuario({ usuario, setUsuario }) {
    return(
        <>
            <span>Datos usuario: {usuario.email}</span>
            <button onClick={() => setUsuario({})}>Logout</button>
        </>
    )
}