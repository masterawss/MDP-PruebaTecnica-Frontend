
import { toast } from 'react-toastify';

// const API_URL = "http://localhost:4400/api/v1/"
const API_URL = "https://mdp-prueba.herokuapp.com/api/v1/"

export const getAll = async () => {
    try {
        let clientes = await fetch(API_URL +  'cliente')
        return await clientes.json()
    } catch (error) {
        toast.error("Ha ocurrido un error 😓")
        throw new Error('No se pudo obtener el listado de clientes')
    }
}

export const storeClienteToApi = async (data) => {
    try {
        let resp = await fetch(API_URL + 'cliente/store', 
            {
                method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

        let cliente = await resp.json()
        if(!resp.ok) throw new Error(cliente)
        toast.success("Se registró correctamente")
        return cliente
    } catch (error) {
        toast.error("Ha ocurrido un error 😓")
        throw new Error('No se pudo realizar la operación'+ error)
    }
    
}
export const deleteClienteApi = async (id) => {
    try {
        let resp = await fetch(API_URL + 'cliente/destroy/'+id, 
            {
                method: 'DELETE', 
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        if(!resp.ok) throw new Error('No se pudo eliminar correctamente')

        let id_res = await resp.json()
        toast.success("Se eliminó correctamente")
        return id_res
    } catch (error) {
        toast.error("Ha ocurrido un error 😓")
        throw new Error('No se pudo realizar la operación'+ error)
    }
    
}

export const getDashboardKPIs = async () => {
    try {
        let resp = await fetch(API_URL +  'dashboard/get-kpis')
        let kpis = await resp.json()
        console.log(kpis);
        return kpis
    } catch (error) {
        toast.error("Ha ocurrido un error 😓")
        throw new Error('No se pudo obtener el listado de clientes')
    }
}