import { create } from 'zustand'
import { GeneralProduct } from '@/Models/GeneralProduct'
import { baseService } from '@/Services/base.service'
import { URL_GENERALPRODUCTS } from '@/constants/service.constant'

interface Props {
    generalProducts: GeneralProduct[],
    loading: boolean
    subcategoryid: (id:string) => void
    createGeneralProduct: (product: GeneralProduct)=> Promise<GeneralProduct>
}

export const useGeneralProductStore = create<Props>(
    (set, get) => ({
        generalProducts: [],
        loading: false,
        subcategoryid: (id: string) => {
            set({loading: true})
            baseService(URL_GENERALPRODUCTS).getById<GeneralProduct[]>(id)
                .then(generalProducts => {
                    set({generalProducts,loading: false})
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        createGeneralProduct : async (formData:GeneralProduct) => {
            set({loading: true})
            return baseService(URL_GENERALPRODUCTS)
                .create<GeneralProduct>(formData)
                .then(generalProduct=>{
                    const generalProducts = get().generalProducts
                    generalProducts.push(generalProduct)
                    set({generalProducts,loading: false})
                    return generalProduct
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)