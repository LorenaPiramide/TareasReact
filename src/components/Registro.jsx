import { useState } from "react"
import { registro } from "../servicios/peticiones"

export default function Registro({ setUsuario }) {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [condiciones, setCondiciones] = useState("");
    
    return(
        <>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label>Apellidos</label>
            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Repetir email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Repetir contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Condiciones</label>
            <input type="checkbox" value={condiciones} onChange={(e) => setCondiciones(e.target.value)} />
        </>
    )
}