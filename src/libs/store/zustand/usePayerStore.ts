import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";
import { baseService } from '@/Services/base.service'
import { Payer } from '@/Models/Payer'
import { URL_PAYER } from '@/constants/service.constant'


interface Props {
    payer: Payer[],
    list: ()=> void,
    getPayerById: (id: string) => Promise<Payer | undefined>
    createPayer: (payerForm: Payer) => Promise<Payer>
}

export const usePayerStore = create<Props>()(persist(
    (set, get) => ({
        payer: [],
        list: ()=>{
            const payer = get().payer
            if(!payer.length){
                baseService(URL_PAYER)
                    .list<Payer>()
                    .then(payer=>{
                        set({payer})
                    })
                    .catch((err:any)=>{
                        throw err
                    })

            }
        },
        getPayerById: (id: string) => {
            const payer = get().payer
            const payerFound = payer.find(p => p.id === id)
            if(payerFound){
                return Promise.resolve(payerFound)
            }else{
                return baseService(URL_PAYER).getById<Payer>(id)
            }
        },
        createPayer: (payerForm: Payer) => {
            const payerSS = get().payer
            return baseService(URL_PAYER)
                .create<Payer>(payerForm)
                .then(payer=>{
                    payerSS.push(payer)
                    set({ payer: payerSS })
                    return payer
                }).catch((err:any)=>{
                    throw err
                })
            
        },
    }),
    {
        name: "payer",
        storage: createJSONStorage(() => sessionStorage),
    }
))