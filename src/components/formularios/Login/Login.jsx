import { useState } from "react"
import { login } from "../../../servicios/peticiones";
import "../form.css"
import { useNavigate, useOutletContext } from "react-router";


// Input de nombre de usuario, de password y un botón con un onClick para enviar el formulario
export default function Login() {

    const [usuario, setUsuario] = useOutletContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [errores, setErrores] = useState({
        email: "",
        password: ""
    });

    const comprobarEmail = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "Debes poner un email.";
        }

        setErrores({ ...errores, email: error })
    }

    const comprobarPassword = (e) => {
        const valor = e.target.value;
        let error = "";

        if (!valor) {
            error = "Debes escribir una contraseña.";
        }

        setErrores({ ...errores, password: error })
    }

    // const validarTodos = () => {
    //     // Limpiamos los errores antiguos
    //     setErrores({ email: "", password: "" })
    //     const erroresActuales = {
    //         email: comprobarEmail({ target: { value: usuario.email } }),
    //         password: comprobarPassword({ target: { value: usuario.password } })
    //     }
    //     for (let campo in errores) {
    //         if (erroresActuales[campo] !== "") {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    const iniciarSesion = () => {
        const erroresActuales = {
            email: !email ? "Debes poner un email." : "",
            password: !password ? "Debes poner una contraseña." : ""
        }

        setErrores(erroresActuales);

        if (!erroresActuales.email && !erroresActuales.password) {
            login(email).then(data => {
                if (data.length === 0) {
                    setErrores(previo => ({ ...previo, email: "El usuario no existe" }))
                    return;
                }

                if (data[0].password !== password) {
                    setErrores(previo => ({ ...previo, password: "Contraseña incorrecta." }))
                    return;
                }

                setUsuario(data[0]);
                sessionStorage.setItem("usuario", JSON.stringify(data[0]));
                navigate("/");
            })
        }
    }

    return(
        <>
        {/* OnChange -> Cada vez que se modifica el campo. 
        Sincronizamos el email con el valor en el campo */}
            <div className="contenedorFormulario">
                <div className="formulario">
                    <label>Email</label>
                    <div className="campoInput">
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={comprobarEmail}
                            className={errores.email ? "inputError" : ""}
                        />
                        {/* Esto es como una ternaria */}
                        {errores.email && <span className="errorMensaje">{errores.email}</span>}
                    </div>
                </div>
                
                <div className="formulario">
                    <label>Contraseña</label>
                    <div className="campoInput">
                        <input
                            type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            onBlur={comprobarPassword}
                            className={errores.password ? "inputError" : ""}
                        />
                        {errores.password && <span className="errorMensaje">{errores.password}</span>}
                    </div>
                </div>
                
                <button onClick={iniciarSesion}>Login</button>
            </div>
        </>
    )
}