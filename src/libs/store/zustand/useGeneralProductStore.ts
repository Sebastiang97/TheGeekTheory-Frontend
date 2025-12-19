import { create } from 'zustand'
import { GeneralProduct } from '@/Models/GeneralProduct'
import { baseService } from '@/Services/base.service'
import { URL_GENERALPRODUCTS } from '@/constants/service.constant'
import { COLOR_IMAGE_SIZE_ADAPTER } from '@/adapters/ColorImageSizeAdapter'
import { TAGS_ADAPTER } from '@/adapters/TagsAdapter'
import { DirectionPage } from '@/Models/DirectionPage'
import { Pagination } from '@/Models/Pagination'

export interface FilterQueryGP {
    cursor          : string, 
    limit           : number, 
    direction       : DirectionPage,
    subCategoryId   : string
    tags            : string[]
    orderBy         : string
}

interface Props {
    generalProduct: GeneralProduct[],
    generalProducts: GeneralProduct[],
    loading: boolean
    getFilter: (filterQueryGP:FilterQueryGP) => Promise<Pagination<GeneralProduct[]>>
    getGPById: (id:string) => Promise<GeneralProduct[]>
    getGPSubCategoryId: (id:string) => Promise<GeneralProduct[]>
    createGeneralProduct: (product: GeneralProduct)=> Promise<GeneralProduct>
    deleteGeneralProductById: (id: string)=> Promise<void>
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
                    generalProduct[0].adaptedTags = TAGS_ADAPTER(generalProduct[0].tags)
                    set({generalProduct,loading: false})
                    return generalProduct
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getFilter({
            cursor,
            limit,
            direction,
            subCategoryId,
            tags,
            orderBy
        }) {
            set({loading: true})
            return baseService(`${URL_GENERALPRODUCTS}getFilter?cursor=${cursor}&limit=${limit}&direction=${direction}&subCategoryId=${subCategoryId}&tags=${tags}&orderBy=${orderBy}`)
                .list<Pagination<GeneralProduct[]>>()
                .then(generalProducts => {
                    generalProducts.content && generalProducts.content.map(generalProduct=>{
                        generalProduct.colorImageSizes = COLOR_IMAGE_SIZE_ADAPTER(generalProduct.colorImageSize)
                        generalProduct.adaptedTags = TAGS_ADAPTER(generalProduct.tags)
                    })
                    set({loading: false})
                    return generalProducts
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
                        generalProduct.adaptedTags = TAGS_ADAPTER(generalProduct.tags)
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
        },
        deleteGeneralProductById : async (id:string) => {
            set({loading: true})
            return baseService(URL_GENERALPRODUCTS)
                .remove(id)
                .then(_=>{
                    const generalProducts = get().generalProducts
                    const newGeneralProducts = generalProducts.filter(product=> product.id !== id)
                    set({
                        generalProducts: newGeneralProducts, 
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