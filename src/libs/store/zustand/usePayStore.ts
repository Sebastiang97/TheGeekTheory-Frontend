import { Pay } from '@/Models/Pay'
import { Product } from '@/Models/Product'
import { baseService } from '@/Services/base.service'
import { URL_PAYS } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    pays: Pay[],
    loading: boolean
    list: () => void
    getPaysAndPayer: () => Promise<Pay[]>
    listAll: () => Promise<Pay[]>
    getPayById: (id: string) => Promise<Pay>
    getPayByPayerId: (payerId:string)=>Promise<Pay[]>
    createPay: (product: FormData)=> Promise<Product>
}

export const usePayStore = create<Props>(
    (set, get) => ({
        pays: [],
        loading: false,
        list: () => {
            if(!get().pays.length){
                set({loading: true})
                baseService(URL_PAYS).list<Pay>()
                .then(pays => {
                    set({pays})
                })
            }
        },
        getPaysAndPayer: () => {
            return baseService(URL_PAYS+"getPaysAndPayer").list<Pay>()
                .then(pays => {
                    return pays
                })
        },
        listAll: () => {
            return baseService(URL_PAYS).list<Pay>()
                .then(pays => pays)
        },
        getPayById:  (id:string) => {
            return baseService(URL_PAYS)
                .getById<Pay>(id)
                .then(pay=>{
                    return pay
                })
        },
        getPayByPayerId: (payerId:string) =>{
            return baseService(URL_PAYS+"getByPayerId/")
                .getById<Pay[]>(payerId)
                .then(pay=>{
                    return pay
                })
        },
        createPay : async (formData:FormData) => {
            set({loading: true})
            
            const product = await baseService(URL_PAYS).createFile<any>(formData)
            const pays = get().pays

            pays.push(product)
            set({pays,loading: false})
            
            return product
        },
    })
)