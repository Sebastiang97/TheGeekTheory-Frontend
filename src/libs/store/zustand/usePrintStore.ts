import { Print } from '@/Models/Print'
import { baseService } from '@/Services/base.service'
import { URL_PRINTS } from '@/constants/service.constant'
import { create } from 'zustand'

interface PropsUseProduct {
    prints: Print[],
    loading: boolean
    list: () => void
    getById: (id: string) => Print | undefined
    createPrint: (product: FormData)=> Promise<Print>
}

export const usePrintStore = create<PropsUseProduct>(
    (set, get) => ({
        prints: [],
        loading: false,
        list: () => {
            if(!get().prints.length){
                set({loading: true})
                baseService(URL_PRINTS).list<Print[]>()
                .then(prints => {
                    set({prints,loading: false})
                })
            }
        },
        getById:  (id:string) => get().prints.find(product=> product.id === id),
        createPrint : async (formData:FormData) => {
            set({loading: true})

            const print = await baseService(URL_PRINTS).createFile<any>(formData)
            const prints = get().prints

            prints.push(print)
            set({prints,loading: false})
            
            return print
        }
    })
)