import { create } from 'zustand'
import { GeneralProduct } from '@/Models/GeneralProduct'
import { baseService } from '@/Services/base.service'
import { URL_GENERALPRODUCTS } from '@/constants/service.constant'
import { COLOR_IMAGE_SIZE_ADAPTER } from '@/adapters/ColorImageSizeAdapter'

interface Props {
    generalProduct: GeneralProduct[],
    generalProducts: GeneralProduct[],
    loading: boolean
    getGPById: (id:string) => Promise<GeneralProduct[]>
    getGPSubCategoryId: (id:string) => Promise<GeneralProduct[]>
    createGeneralProduct: (product: GeneralProduct)=> Promise<GeneralProduct>
}

export const useGeneralProductStore = create<Props>(
    (set, get) => ({
        generalProduct: [],
        generalProducts: [],
        loading: false,
        getGPById: async (id: string) => {
            set({loading: true})
            return baseService(`${URL_GENERALPRODUCTS}getGPById/`)
                .getById<GeneralProduct[]>(id)
                .then(generalProduct => {
                    generalProduct[0].colorImageSizes = COLOR_IMAGE_SIZE_ADAPTER(generalProduct[0].colorImageSize)
                    set({generalProduct,loading: false})
                    return generalProduct
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getGPSubCategoryId: async (id: string) => {
            set({loading: true})
            return baseService(`${URL_GENERALPRODUCTS}getGPSubCategoryId/`)
                .getById<GeneralProduct[]>(id)
                .then(generalProducts => {
                    generalProducts && generalProducts.map(generalProduct=>{
                        generalProduct.colorImageSizes = COLOR_IMAGE_SIZE_ADAPTER(generalProduct.colorImageSize)
                    })
                    set({generalProducts,loading: false})
                    return generalProducts
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
                    // const generalProducts = get().generalProducts
                    // generalProducts.push(generalProduct)
                    set({loading: false})
                    return generalProduct
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)