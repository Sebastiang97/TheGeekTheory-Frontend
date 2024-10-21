import { SubCategory } from '@/Models/SubCategory'
import { baseService } from '@/Services/base.service'
import { URL_SUBCATEGORIES } from '@/constants/service.constant'
import { UPDATE_BY_ID } from '@/helpers/updateById'
import { create } from 'zustand'

interface Props {
    subCategories: SubCategory[],
    subByCategoryId: SubCategory[],
    loading: boolean
    list: () => void
    createSubCategory: (product: FormData)=> Promise<SubCategory>
    getSubByCategoryId: (categoryId: string) => Promise<SubCategory[]>
    deleteSubById: (id: string)=> Promise<void>
    updateSubCategory: (categoryId: string, formData:FormData)=> Promise<SubCategory>
}

export const useSubCategoryStore = create<Props>(
    (set, get) => ({
        subCategories: [],
        subByCategoryId: [],
        loading: false,
        list: () => {
            set({loading: true})
            baseService(URL_SUBCATEGORIES).list<SubCategory[]>()
                .then(subCategories => {
                    set({subCategories,loading: false})
                })
        },
        getSubByCategoryId: async (categoryId:string) => {
            set({loading: true})
            return baseService(URL_SUBCATEGORIES+"categoryId/"+categoryId)
                .get<SubCategory[]>()
                .then(subByCategoryId=>{
                    set({subByCategoryId,loading: false})
                    return subByCategoryId
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        createSubCategory : async (formData:FormData) => {
            set({loading: true})
            return baseService(URL_SUBCATEGORIES)
                .createFile<SubCategory>(formData)
                .then(subCategory=>{
                    const subCategories = get().subCategories
                    subCategories.push(subCategory)
                    set({subCategories,loading: false})
                    return subCategory
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        updateSubCategory: (categoryId: string, formData:FormData) =>{
            return baseService(URL_SUBCATEGORIES)
                .updateFile<SubCategory>(categoryId, formData)
                .then(categoryUpdated=>{
                    set({
                        subByCategoryId: UPDATE_BY_ID(get().subByCategoryId, categoryUpdated),
                        loading: false
                    })
                    return categoryUpdated
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        deleteSubById: (id: string)=>{
            return baseService(URL_SUBCATEGORIES)
                .remove(id)
                .then(_=>{
                    set({loading: false})
                    return
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)