import { ProductIndividual } from '@/Models/ProductIndividual'
import { baseService } from '@/Services/base.service'
import { URL_PRODUCTS_INDIVIDUAL } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    products: ProductIndividual[],
    loading: boolean
    createProductIndividual: (product: FormData)=> Promise<ProductIndividual>
}

export const useProductIndividualStore = create<Props>(
    (set, get) => ({
        products: [],
        loading: false,
        list: () => {
            set({loading: true})
            baseService(URL_PRODUCTS_INDIVIDUAL).list<ProductIndividual[]>()
                .then(products => {
                    set({products,loading: false})
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getById:  (id:string) => get().products.find(product=> product.id === id),
        createProductIndividual : async (formData:FormData) => {
            set({loading: true})
            return baseService(URL_PRODUCTS_INDIVIDUAL)
                .createFile<ProductIndividual>(formData)
                .then(product=>{
                    const products = get().products
                    products.push(product)
                    set({products,loading: false})
                    return product
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)