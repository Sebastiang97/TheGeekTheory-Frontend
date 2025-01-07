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
            console.log(get().user)
            if(!get().user?.id){
                baseService(URL_AUTHENTICATE+ "/credencials")
                    .get<User>()
                    .then(user=>{
                        console.log({user})
                        set({user: user})
                    })
                    .catch(error=> console.log({error}))
            }
        }
    })
)

