import { URL_PRODUCTSPAY } from '@/constants/service.constant'
import { ProductPay } from '@/Models/ProductsPay'
import { baseService } from '@/Services/base.service'
import { create } from 'zustand'

interface Props {
    productsPay: ProductPay[],
    getProductsByPayId: (id: string) => void
}

export const useProductsPayStore = create<Props>(
    (set, _) => ({
        productsPay: [],
        getProductsByPayId: (id:string)=>{
            baseService(URL_PRODUCTSPAY+"getByPayId/")
                .getById<ProductPay[]>(id)
                .then(productsPay=>{
                    set({productsPay})
                })
        }

    })
)