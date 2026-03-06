import { useState } from "react"
import { registro } from "../../../servicios/peticiones"
import { useNavigate, useOutletContext } from "react-router";

export default function Registro() {

    const navigate = useNavigate();
    const [usuario, setUsuario]= useOutletContext();

    const [emailRepetir, setEmailRepetir] = useState("");
    const [passwordRepetir, setPasswordRepetir] = useState("");
    const [usuarioNuevo,setUsuarioNuevo] = useState({});

    const [error, setError] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        emailRepetir: '',
        password: '',
        passwordRepetir: '',
        condiciones: false // No sé si esto va así
    })

    function validarNombre(e) {
        const nombre = e.target.value.trim();
        const errorNombre = document.getElementById()
    }
    
    const registrar = () => {
        
        if (emailRepetir) {

        }
        registro(usuarioNuevo).then(data => {
            // FIXME: Creo que en el enunciado pone sin alerts
            alert("Usuario registrado correctamente.")
            debugger;
            sessionStorage.setItem("usuario", JSON.stringify(data));
            setUsuario(data);
            navigate("/");
        })
    }

    return(
        <>
            <div>
                <div className="formulario">
                    <label>Nombre</label>
                    <input type="text" value={usuarioNuevo.nombre} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo,nombre:e.target.value})} />
                    <span id="nombreError"></span>
                </div>
                <div className="formulario">
                    <label>Apellidos</label>
                    <input type="text" value={usuarioNuevo.apellidos} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, apellidos: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Email</label>
                    <input type="text" value={usuarioNuevo.email} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, email: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Repetir email</label>
                    <input type="text" value={emailRepetir} onChange={(e) => setEmailRepetir(e.target.value)} />
                </div>
                <div className="formulario">
                    <label>Contraseña</label>
                    <input type="password" value={usuarioNuevo.password} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, password: e.target.value })} />
                </div>
                <div className="formulario">
                    <label>Repetir contraseña</label>
                    <input type="password" value={passwordRepetir} onChange={(e) => setPasswordRepetir(e.target.value)} />
                </div>
                <div className="formCheckbox">
                    <label>Condiciones</label>
                    <input type="checkbox" checked={usuarioNuevo.condiciones} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, condiciones: e.target.checked })} />
                </div>
                <div className="formCheckbox">
                    <label>Recibir novedades</label>
                    <input type="checkbox" checked={usuarioNuevo.novedades} onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, novedades: e.target.checked })} />
                </div>
                <div className="boton">
                    <button onClick={registrar}>Registrarse</button>
                </div>
            </div>
        </>
    )
}