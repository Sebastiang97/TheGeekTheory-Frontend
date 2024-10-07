import { Product } from '@/Models/Product'
import { baseService } from '@/Services/base.service'
import { URL_PRODUCTS } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    products: Product[],
    productsSubById: Product[],
    loading: boolean
    list: () => void
    getById: (id: string) => Product | undefined
    createProduct: (product: FormData)=> Promise<Product>
    getProductsBySubId: (subId: string) => Promise<Product[]>
}

export const useProductStore = create<Props>(
    (set, get) => ({
        products: [],
        productsSubById: [],
        loading: false,
        list: () => {
            if(!get().products.length){
                set({loading: true})
                baseService(URL_PRODUCTS).list<Product[]>()
                .then(products => {
                    set({products,loading: false})
                })
            }
        },
        getById:  (id:string) => get().products.find(product=> product.id === id),
        createProduct : async (formData:FormData) => {
            set({loading: true})
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            const product = await baseService(URL_PRODUCTS).createFile<any>(formData)
            const products = get().products

            products.push(product)
            set({products,loading: false})
            
            return product
        },
        getProductsBySubId: async (subId:string) => {
            const productsSubById =  await baseService(URL_PRODUCTS+"/subcategoryid/"+subId).get<Product[]>()
            set({productsSubById})
            return productsSubById
        },

    })
)