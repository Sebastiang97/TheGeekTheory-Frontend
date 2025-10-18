import { ProductIndividual } from '@/Models/ProductIndividual'
import { baseService } from '@/Services/base.service'
import { URL_PRODUCTS_INDIVIDUAL } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    product: ProductIndividual,
    products: ProductIndividual[],
    loading: boolean
    getProductsIndiByGPId: (id: string) => Promise<ProductIndividual[]>
    createProductIndividual: (product: FormData)=> Promise<ProductIndividual>
}

export const useProductIndividualStore = create<Props>(
    (set, get) => ({
        product: {} as ProductIndividual,
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
        getProductsIndiByGPId: (id:string)=>{
            set({loading: true})
            return baseService(URL_PRODUCTS_INDIVIDUAL+"/getProductByGPId/")
                .getById<ProductIndividual[]>(id)
                .then(products => {
                    set({products,loading: false})
                    return products
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