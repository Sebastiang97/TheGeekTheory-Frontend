export type Client = {
    (url:string, opt?: any):{
        get        : ()=> Promise<Response>
        put        : (obj:any)=> Promise<Response>
        putFile    : (obj:FormData)=> Promise<Response>
        postFile   : (obj:FormData)=> Promise<Response>
        post       : (obj:any)=> Promise<Response>
        remove     : ()=> Promise<Response>
    }
}

export const client: Client = (url:string, opt?: any) => {
    let get = (): Promise<Response> =>{
        return fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                // "Acces-Control-Allow-Credentials": true,
            },
            ...opt
        })
    }

    let put = (obj:any): Promise<Response> =>{
        return fetch(url, {
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify(obj),
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            ...obj
        })
    }

    let putFile = (obj:FormData): Promise<Response> =>{
        return fetch(url, {
            method: 'PUT',
            body: obj,
            ...opt
        })
    }

    let postFile = (obj:FormData): Promise<Response> =>{
        return fetch(url,{
            method: 'POST',
            body: obj,
            ...opt
        })
    }

    let post = (obj:any): Promise<Response> =>{
        return fetch(url,{
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(obj),
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            ...obj
        })
    }

    let remove = (): Promise<Response> =>{
        return fetch(url, {
            method: 'DELETE',
            credentials: "include",
            ...opt
        })
    }

    return {
        get,
        post,
        postFile,
        put,
        putFile,
        remove
    }
}