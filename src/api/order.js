import {API_URL} from "../utils/constants";

export async function createOrderApi(data){
    const dataSend = { data }
    try {
        const url =`${API_URL}/api/orders`;
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataSend),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getUsuarios(idUser){
    try {
        const response = await fetch(
            `${API_URL}/api/users?filters[id][$eq]=${idUser}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getOrders(idUser){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[nom_usuario][$eq]=${idUser}&filters[estado][$eq]=en progreso&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getOrdersASC(idUser){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[nom_usuario][$eq]=${idUser}&filters[estado][$eq]=en progreso&sort=createdAt:ASC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrders2(idUser){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[nom_usuario][$eq]=${idUser}&filters[estado][$eq]=entregado&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function cambiarEstado(id){
    const dataSend = {
        "data": {
            "estado": "entregado",
          }
    }
    try {
        const url =`${API_URL}/api/orders/${id}`;
        const params = {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataSend),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getOrdersPorFecha(Fecha,nom_usu){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[fecha][$eq]=${Fecha}&filters[estado][$eq]=entregado&filters[nom_usuario][$eq]=${nom_usu}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getOrdersPorEfectivo(Fecha,nom_usu){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[fecha][$eq]=${Fecha}&filters[estado][$eq]=entregado&filters[metodo_pago][$eq]=Efectivo&filters[nom_usuario][$eq]=${nom_usu}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrdersPorDebito(Fecha,nom_usu){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[fecha][$eq]=${Fecha}&filters[estado][$eq]=entregado&filters[metodo_pago][$eq]=Debito&filters[nom_usuario][$eq]=${nom_usu}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrdersPorCredito(Fecha,nom_usu){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[fecha][$eq]=${Fecha}&filters[estado][$eq]=entregado&filters[metodo_pago][$eq]=Credito&filters[nom_usuario][$eq]=${nom_usu}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrdersPorTransferencia(Fecha,nom_usu){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?filters[fecha][$eq]=${Fecha}&filters[estado][$eq]=entregado&filters[metodo_pago][$eq]=Transferencia&filters[nom_usuario][$eq]=${nom_usu}&sort=createdAt:DESC`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}




export async function BuscarPorFecha(fecha_inicio,fecha_termino){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?_filters[$and][0][createdAt][$gt]=${fecha_inicio}T11:00:00.000Z&filters[$and][1][createdAt][$lt]=${fecha_termino}T02:59:00.000Z`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function BuscarPorFechayDebito(fecha_inicio,fecha_termino){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?_filters[$and][0][createdAt][$gt]=${fecha_inicio}T11:00:00.000Z&filters[$and][1][createdAt][$lt]=${fecha_termino}T02:59:00.000Z&filters[$and][2][metodo_pago][$eq]=Debito`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function BuscarPorFechayCredito(fecha_inicio,fecha_termino){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?_filters[$and][0][createdAt][$gt]=${fecha_inicio}T11:00:00.000Z&filters[$and][1][createdAt][$lt]=${fecha_termino}T02:59:00.000Z&filters[$and][2][metodo_pago][$eq]=Credito`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function BuscarPorFechayEfectivo(fecha_inicio,fecha_termino){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?_filters[$and][0][createdAt][$gt]=${fecha_inicio}T11:00:00.000Z&filters[$and][1][createdAt][$lt]=${fecha_termino}T02:59:00.000Z&filters[$and][2][metodo_pago][$eq]=Efectivo`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function BuscarPorFechayTransferencia(fecha_inicio,fecha_termino){
    try {
        const response = await fetch(
            `${API_URL}/api/orders?_filters[$and][0][createdAt][$gt]=${fecha_inicio}T11:00:00.000Z&filters[$and][1][createdAt][$lt]=${fecha_termino}T02:59:00.000Z&filters[$and][2][metodo_pago][$eq]=Transferencia`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
