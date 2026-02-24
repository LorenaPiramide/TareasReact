import { URL_SERVER } from "../Constantes";

export function login(email) {
    return fetch(`${URL_SERVER}usuarios?email=${encodeURIComponent(email)}`)
        .then(res => {
            if (!res.ok) throw new Error("No se ha podido conectar con el servidor.");
            return res.json();
        })
}

export function registro(usuario) {
    return fetch(`${URL_SERVER}usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    }).then(res => {
        if(!res.ok) throw new Error("No se ha podido registrar al usuario.");
        return res.json();
    })
}

export function obtenerTarea(idUser) {
    return fetch(`${URL_SERVER}tareas?id_user=${idUser}`)
        .then(res => res.json());
}

export function borrarTarea(idTarea) {
    return fetch(`${URL_SERVER}tareas/${id}`, {
        method: "DELETE"
    })
}