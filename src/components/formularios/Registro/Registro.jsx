import { useState } from "react"
import { registro } from "../../../servicios/peticiones"
import { useNavigate, useOutletContext } from "react-router";

export default function Registro() {

    const navigate = useNavigate();
    const [usuario, setUsuario]= useOutletContext();

    const [emailRepetir, setEmailRepetir] = useState("");
    const [passwordRepetir, setPasswordRepetir] = useState("");
    const [usuarioNuevo,setUsuarioNuevo] = useState({});

    const [errores, setErrores] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        emailRepetir: "",
        password: "",
        passwordRepetir: "",
        condiciones: ""
    })

    const validarNombre = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "El nombre es obligatorio.";
        } else if (valor.length < 3) {
            error = "El nombre debe tener al menos 3 caracteres.";
        } else if (valor[0] !== valor[0].toUpperCase()) {
            error = "El nombre debe empezar por mayúscula.";
        }

        setErrores({ ...errores, nombre: error });
    }

    // TODO: Creo que se puede hacer de otra forma
    const validarApellidos = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "El apellido es obligatorio.";
        } else if (valor.length < 3) {
            error = "El apellido debe tener al menos 3 caracteres.";
        } else if (valor[0] !== valor[0].toUpperCase()) {
            error = "El apellido debe empezar por mayúscula.";
        }

        setErrores({ ...errores, apellidos: error });
    }

    // TODO: Comprobar si el email ya está registrado o no
    const validarEmail = (e) => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "El email es obligatorio.";
        } else if (!regex.test(valor)) {
            error = "El email no es válido.";
        }

        setErrores({ ...errores, email: error });
    }

    const validarRepetirEmail = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "Es obligatorio repetir el email.";
        } else if (valor !== usuarioNuevo.email) {
            error = "Los emails no coinciden.";
        }

        setErrores({ ...errores, emailRepetir: error })
    }

    const validarPassword = (e) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "La contraseña es obligatoria."
        } else if (!regex.test(valor)) {
            error = "La contraseña debe tener, al menos, 8 carácteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial."
        }

        setErrores({ ...errores, password: error });
    }

    const validarPasswordRepetida = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "Repetir la contraseña es obligatorio.";
        } else if (valor !== usuarioNuevo.password) {
            error = "Las contraseñas no coinciden.";
        }

        setErrores({ ...errores, passwordRepetir: error });
    }
    
    const registrar = () => {
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
                    <input 
                        type="text" 
                        value={usuarioNuevo.nombre} 
                        onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo,nombre:e.target.value})}
                        onBlur={validarNombre}
                        className={errores.nombre ? "inputError" : ""} // Hay que hacer un input_error en css para poner el borde de input en rojo
                    />
                    {/* TODO: Me parece que no necesito el id del span */}
                    <span className="errorMensaje">
                        {errores.nombre} {/* Mensaje del return del error */}
                    </span>
                </div>
                <div className="formulario">
                    <label>Apellidos</label>
                    <input 
                        type="text" 
                        value={usuarioNuevo.apellidos} 
                        onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, apellidos: e.target.value })}
                        onBlur={validarApellidos}
                        className={errores.apellidos ? "inputError" : ""}
                    />
                    <span className="errorMensaje">
                        {errores.apellidos}
                    </span>
                </div>
                <div className="formulario">
                    <label>Email</label>
                    <input 
                        type="text" value={usuarioNuevo.email} 
                        onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, email: e.target.value })}
                        onBlur={validarEmail}
                        className={errores.email ? "inputError" : ""}
                    />
                    <span className="errorMensaje">
                        {errores.email}
                    </span>
                </div>
                <div className="formulario">
                    <label>Repetir email</label>
                    <input 
                        type="text" 
                        value={emailRepetir} 
                        onChange={(e) => setEmailRepetir(e.target.value)}
                        onBlur={validarRepetirEmail}
                        className={errores.emailRepetir ? "inputError" : ""}
                    />
                    <span className="errorMensaje">
                        {errores.emailRepetir}
                    </span>
                </div>
                <div className="formulario">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        value={usuarioNuevo.password} 
                        onChange={(e) => setUsuarioNuevo({ ...usuarioNuevo, password: e.target.value })}
                        onBlur={validarPassword}
                        className={errores.password ? "inputError" : ""}
                    />
                    <span className="errorMensaje">
                        {errores.password}
                    </span>
                </div>
                <div className="formulario">
                    <label>Repetir contraseña</label>
                    <input 
                        type="password" 
                        value={passwordRepetir} 
                        onChange={(e) => setPasswordRepetir(e.target.value)}
                        onBlur={validarPasswordRepetida}
                        className={errores.passwordRepetir ? "inputError" : ""}
                    />
                    <span className="errorMensaje">
                        {errores.passwordRepetir}
                    </span>
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