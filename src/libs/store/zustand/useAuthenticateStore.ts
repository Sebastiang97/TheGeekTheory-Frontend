import { User } from "@/Models/User"
import { baseService } from "@/Services/base.service"
import { URL_AUTHENTICATE } from "@/constants/service.constant"
import { create } from "zustand"


interface PropsUseAuthenticate {
    user: User,
    loading: boolean
    getUser: () => void    
}

export const useAuthenticateStore = create<PropsUseAuthenticate>(
    (set, get) => ({
        user: {} as User,
        loading: false,
        getUser: () =>{
            console.log()
            if(!get().user?.isLogging){
                baseService(URL_AUTHENTICATE+ "/credencials", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                        Accept: "application/json",
                        "content-Type": "application/json",
                        "Acces-Control-Allow-Credentials": true,
                        }
                    })
                    .get<User>()
                    .then(user=>{
                        set({user: user})
                    })
                    .catch(error=> console.log({error}))
            }
        }
    })
)

