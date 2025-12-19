import { ProductIndividual } from '@/Models/ProductIndividual'
import { baseService } from '@/Services/base.service'
import { URL_IMAGE_ADAPTER } from '@/adapters/UrlImageAdapter'
import { URL_PRODUCTS_INDIVIDUAL } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    product: ProductIndividual,
    products: ProductIndividual[],
    loading: boolean
    getById: (id: string)=> Promise<ProductIndividual>
    getProductsIndiByGPId: (id: string) => Promise<ProductIndividual[]>
    createProductIndividual: (product: FormData)=> Promise<ProductIndividual>
    updateProductIndividual: (productId: string, formData:FormData)=> Promise<ProductIndividual>
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
        getById:  (id:string) => {
            set({loading: true})
            return baseService(URL_PRODUCTS_INDIVIDUAL+"/getProductById/")
                .getById<ProductIndividual[]>(id)
                .then(product => {
                    product[0].images = URL_IMAGE_ADAPTER(product[0].urlImage)
                    set({product: product[0],loading: false})
                    return product[0]
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
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
        },
        updateProductIndividual: (productId: string, formData:FormData)=> {
            set({loading: true})
            return baseService(URL_PRODUCTS_INDIVIDUAL)
                .updateFile<ProductIndividual>(productId, formData)
                .then(productUpdated=>{
                    set({product: productUpdated,loading: false})
                    return productUpdated
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
    })
)