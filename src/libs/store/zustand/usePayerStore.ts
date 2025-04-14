import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";
import { baseService } from '@/Services/base.service'
import { Payer } from '@/Models/Payer'
import { URL_PAYER } from '@/constants/service.constant'


interface Props {
    payer: Payer[],
    selectedPlayer: Payer,
    list: (idUser: string)=> void,
    getPayerById: (id: string) => Promise<Payer | undefined>
    createPayer: (payerForm: Payer) => Promise<Payer>
    addSelectedPayer: (payer: Payer) => void
}

export const usePayerStore = create<Props>()(persist(
    (set, get) => ({
        payer: [],
        selectedPlayer: {} as Payer,
        list: (idUser: string)=>{
            if(idUser){
                baseService(`${URL_PAYER}/getPayerByIdUser/`)
                    .list<Payer[]>()
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
                return baseService(`${URL_PAYER}/`).getById<Payer>(id)
            }
        },
        createPayer: (payerForm: Payer) => {
            const payerSS = get().payer
            return baseService(URL_PAYER)
                .create<Payer>(payerForm)
                .then(payer=>{
                    payerSS.push(payer)
                    set({ payer: payerSS,  selectedPlayer: payer})
                    return payer
                }).catch((err:any)=>{
                    throw err
                })
            
        },
        addSelectedPayer: (payer: Payer) => {
            set({selectedPlayer: payer})
        }
    }),
    {
        name: "payer",
        storage: createJSONStorage(() => localStorage),
    }
))