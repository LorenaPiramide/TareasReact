import { useState } from "react"
import { registro } from "../../../servicios/peticiones"

export default function Registro({ setUsuario }) {

    const [emailRepetir, setEmailRepetir] = useState("");
    const [passwordRepetir, setPasswordRepetir] = useState("");
    const [usuarioNuevo,setUsuarioNuevo]= useState({});
    
    return(
        <>
            <div>
                <div className="formulario">
                    <label>Nombre</label>
                    <input type="text" value={usuarioNuevo.nombre} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, usuarioNuevo: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Apellidos</label>
                    <input type="text" value={usuarioNuevo.apellidos} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, usuarioNuevo: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Email</label>
                    <input type="text" value={usuarioNuevo.email} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, usuarioNuevo: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Repetir email</label>
                    <input type="text" value={emailRepetir} onChange={(e) => setEmailRepetir(e.target.value)} />
                </div>
                <div className="formulario">
                    <label>Contraseña</label>
                    <input type="password" value={usuarioNuevo.password} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, usuarioNuevo: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Repetir contraseña</label>
                    <input type="password" value={passwordRepetir} onChange={(e) => setPasswordRepetir(e.target.value)} />
                </div>
                <div className="condiciones">
                    <label>Condiciones</label>
                    <input type="checkbox" value={usuarioNuevo.condiciones} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, usuarioNuevo: e.target.value })} />
                </div>
                <div className="boton">
                    <button onClick={() => {

                    }}>Registrarse</button>
                </div>
            </div>
        </>
    )
}