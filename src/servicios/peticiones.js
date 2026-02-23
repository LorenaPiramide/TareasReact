import { URL_SERVER } from "../Constantes";

export function obtenerTarea(idUser) {
    return fetch(`${URL_SERVER}tareas?id_user=${idUser}`)
        .then(res => res.json());
}