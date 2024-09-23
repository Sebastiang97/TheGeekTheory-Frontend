export type Client = {
    (url:string, opt?: any):{
        get        : ()=> Promise<Response>
        put        : ()=> Promise<Response>
        postFile       : (obj:FormData)=> Promise<Response>
        post       : (obj:any)=> Promise<Response>
        remove     : ()=> Promise<Response>
    }
}

export const client: Client = (url:string, opt?: any) => {
    let get = (): Promise<Response> =>{
        return fetch(url, {
            credentials: "include",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Acces-Control-Allow-Credentials": true,
            },
            ...opt
        })
    }

    let put = (): Promise<Response> =>{
        return fetch(url, opt)
    }

    let postFile = (obj:FormData): Promise<Response> =>{
        return fetch(url,{
            method: 'POST',
            body: obj,
        })
    }

    let post = (obj:any): Promise<Response> =>{
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    let remove = (): Promise<Response> =>{
        return fetch(url, opt)
    }

    return {
        get,
        post,
        postFile,
        put,
        remove
    }
}