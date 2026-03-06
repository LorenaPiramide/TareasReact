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

    return(
        <>
        {/* OnChange -> Cada vez que se modifica el campo. Sincronizamos el email con el valor en el campo */}
            <div>
                <div className="formulario">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="formulario">
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <button onClick={() => {

                    login(email).then(data => {

                        if (data.length === 0) {
                            alert("El usuario no existe.");
                            return;
                        }

                        if (data[0].password !== password) {
                            alert("Contraseña incorrecta.");
                            return;
                        }

                        setUsuario(data[0]);
                        sessionStorage.setItem("usuario", JSON.stringify(data[0]));
                        navigate("/");
                    })
                    
                }}>Login</button>
            </div>
            
        </>
    )
}