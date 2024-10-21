import { Product } from '@/Models/Product'
import { baseService } from '@/Services/base.service'
import { URL_PRODUCTS } from '@/constants/service.constant'
import { UPDATE_BY_ID } from '@/helpers/updateById'
import { create } from 'zustand'

interface Props {
    products: Product[],
    productsSubById: Product[],
    loading: boolean
    list: () => void
    getById: (id: string) => Product | undefined
    createProduct: (product: FormData)=> Promise<Product>
    getProductsBySubId: (subId: string) => Promise<Product[]>
    deleteProductById: (id: string)=> Promise<void>
    updateProduct: (productId: string, formData:FormData)=> Promise<Product>
}

export const useProductStore = create<Props>(
    (set, get) => ({
        products: [],
        productsSubById: [],
        loading: false,
        list: () => {
            set({loading: true})
            baseService(URL_PRODUCTS).list<Product[]>()
                .then(products => {
                    set({products,loading: false})
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getById:  (id:string) => get().products.find(product=> product.id === id),
        createProduct : async (formData:FormData) => {
            set({loading: true})
            return baseService(URL_PRODUCTS)
                .createFile<Product>(formData)
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
        getProductsBySubId: async (subId:string) => {
            set({loading: true})
            return baseService(URL_PRODUCTS+"/subcategoryid/"+subId)
                .get<Product[]>()
                .then(productsSubById=>{
                    set({productsSubById,loading: false})
                    return productsSubById
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        updateProduct: (productId: string, formData:FormData)=> {
            set({loading: true})
            return baseService(URL_PRODUCTS)
                .updateFile<Product>(productId, formData)
                .then(productUpdated=>{
                    set({
                        productsSubById: UPDATE_BY_ID(get().productsSubById, productUpdated) ,
                        loading: false
                    })
                    return productUpdated
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        deleteProductById: (id: string)=>{
            set({loading: true})
            return baseService(URL_PRODUCTS)
                .remove(id)
                .then(_=>{
                    const productsSubById = get().productsSubById
                    const newProducts = productsSubById.filter(product=> product.id !== id)
                    set({
                        productsSubById:newProducts, 
                        loading: false
                    })
                    return
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)