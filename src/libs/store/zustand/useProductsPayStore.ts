import { URL_PRODUCTSPAY } from '@/constants/service.constant'
import { ProductPay } from '@/Models/ProductsPay'
import { baseService } from '@/Services/base.service'
import { create } from 'zustand'

interface Props {
    productsPay: ProductPay[],
    loading: boolean
    getProductsByPayId: (id: string) => void
}

export const useProductsPayStore = create<Props>(
    (set, _) => ({
        productsPay: [],
        loading: false,
        getProductsByPayId: (id:string)=>{
            set({loading: true})
            baseService(URL_PRODUCTSPAY+"getByPayId/")
                .getById<ProductPay[]>(id)
                .then(productsPay=>{
                    set({productsPay, loading: false})
                })
        }

    })
)