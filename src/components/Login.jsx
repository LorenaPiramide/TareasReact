import { useState } from "react"
import { login } from "../servicios/peticiones";

// Input de nombre de usuario, de password y un botón con un onClick para enviar el formulario
export default function Login({ setUsuario }) {

    // El set va a cambiar automáticamente la pantalla, no hay que forzar nada como en js
    // setUsuario({loquesea})

    // Se puede dejar en blanco, o "", porque va a ser de input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        {/* OnChange -> Cada vez que se modifica el campo. Sincronizamos el email con el valor en el campo */}
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick={() => {
                // OnClick -> Aquí va toda la función para comprobar el login. El get, por ejemplo.
                // Aquí también va la parte del sesionStorage

                // Cuando hayamos hecho todas las comprobaciones. El data es lo que te devuelva el get, creo que no hay que poner data literal.
                // Hay que crear una carpeta servicios. Con get, post, put, etc. Se importa y se hace un get. 
                // Será un callback dentro de otro, por el get, que ya tendrá un callback

                // Aquí, lo de la redirección, es con el set, no con el location ese que hay en el ejercicio de tareas que se le entregó, la evaluable

                login(email).then(data => {

                    if (data.length === 0) {
                        alert("El usuario no existe.");
                        return;
                    }

                    if (data[0].password !== password) {
                        alert("Contraseña incorrecta.");
                        return;
                    }

                    setUsuario(data[0]); // Guardamos el usuario X una vez encontrado
                })

                // setUsuario(data);
            }}>Login</button>
        </>
    )
}