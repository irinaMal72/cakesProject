import {$authHost,$host} from "./index";
import jwt_decode from "jwt-decode";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type',type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createCake = async (cake) => {
    const {data} = await $authHost.post('api/cake',cake)
    return data
}

export const fetchCakes = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/cake',{params: {
            typeId, page, limit
        }})
    return data
}
export const fetchOneCake = async (id) => {
    const {data} = await $host.get('api/cake/'+id)
    return data
}


