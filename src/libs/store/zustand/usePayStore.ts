import { DirectionPage } from '@/Models/DirectionPage'
import { Pagination } from '@/Models/Pagination'
import { Pay } from '@/Models/Pay'
import { Product } from '@/Models/Product'
import { baseService } from '@/Services/base.service'
import { URL_PAYS } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    pays: Pay[],
    loading: boolean
    list: () => void
    getPaysAndPayer: (cursor:string, limit:number, direction: DirectionPage) => Promise<Pagination<Pay[]>>
    listAll: () => Promise<Pay[]>
    getPayById: (id: string) => Promise<Pay>
    getPayByPayerId: (payerId:string, cursor:string, limit:number, direction: DirectionPage)=>Promise<Pagination<Pay[]>>
    createPay: (product: FormData)=> Promise<Product>
    updateNumberGuide: (id: string, numberGuide: string) => Promise<Pay>
}

export const usePayStore = create<Props>(
    (set, get) => ({
        pays: [],
        loading: false,
        list: () => {
            if(!get().pays.length){
                set({loading: true})
                baseService(URL_PAYS).list<Pay[]>()
                .then(pays => {
                    set({pays})
                })
            }
        },
        getPaysAndPayer: (cursor, limit = 5, direction) => {
            return baseService(`${URL_PAYS}getPaysAndPayer?cursor=${cursor}&limit=${limit}&direction=${direction}`)
                .list<Pagination<Pay[]>>()
                .then(pays => {
                    return pays
                })
        },
        listAll: () => {
            return baseService(URL_PAYS).list<Pay[]>()
                .then(pays => pays)
        },
        getPayById:  (id:string) => {
            return baseService(URL_PAYS)
                .getById<Pay>(id)
                .then(pay=>{
                    return pay
                })
        },
        getPayByPayerId: (payerId:string, cursor, limit = 5, direction) =>{
            return baseService(`${URL_PAYS}getByPayerId/${payerId}?cursor=${cursor}&limit=${limit}&direction=${direction}`)
                .list<Pagination<Pay[]>>()
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
        updateNumberGuide: async (id: string, numberGuide: string)=> {
            console.log(id, numberGuide)
            return baseService(`${URL_PAYS}numberGuide/`).update<Pay>(id, {numberGuide})

            // return Promise.resolve({} as Pay)
        }
    })
)