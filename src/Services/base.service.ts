import { DetailedError } from "@/helpers/DetailedError"
import { Client, client } from "@/libs/fetch/Client"

export const baseService = (url:string, opt?: any) =>{

    let http: Client = client

    let list = <T>(): Promise<T> =>{
        return http(url, opt).get()
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                throw error
            })
    }

    let get = <T>(): Promise<T> =>{
        return http(url, opt).get()
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                throw error
            })
    }
    

    let getById = <T>(id:string): Promise<T> =>{
        return http(url+id, opt).get()
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                throw error
            })
    }

    let createFile = <T>(object:FormData): Promise<T> =>{
        return http(url, opt).postFile(object)
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                console.log({error})
                throw error
            })
    }

    let create = <T>(object:any): Promise<T> =>{
        return http(url, opt).post(object)
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                throw error
            })
    }

    let update = <T>(id:string, object:any): Promise<T> =>{
        return http(url+id, opt).put(object)
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                
            })
    }

    let updateFile = <T>(id:string, object:FormData): Promise<T> =>{
        return http(url+id, opt).putFile(object)
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                console.log({error})
                throw error
            })
    }

    let remove = <T>(id:string): Promise<T> =>{
        return http(url+id, opt).remove()
            .then(async res => {
                if (!res.ok) {
                    throw new DetailedError('Failed to fetch data', {
                        status: res.status,
                        details: await res.json(),
                    });
                }
                return res.json()
            })
            .catch(error=> {
                throw error
            })
    }

    return {
        list,
        get,
        create,
        createFile,
        getById,
        update,
        updateFile,
        remove,
    }
}