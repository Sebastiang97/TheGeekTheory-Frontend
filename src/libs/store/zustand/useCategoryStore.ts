import { Category } from '@/Models/Category'
import { baseService } from '@/Services/base.service'
import { URL_CATEGORY } from '@/constants/service.constant'
import { UPDATE_BY_ID } from '@/helpers/updateById'
import { create } from 'zustand'

interface Props {
    categories: Category[],
    loading: boolean
    list: () => Promise<Category[]>
    getById: (id: string) => Category | undefined
    createCategory: (product: any)=> Promise<Category>
    deleteCategoryById: (id: string)=> Promise<void>
    updateCategory: (productId: string, formData:any)=> Promise<Category>
}

export const useCategoryStore = create<Props>(
    (set, get) => ({
        categories: [],
        loading: false,
        list: async () => {
            set({loading: true})
            return baseService(URL_CATEGORY).list<Category[]>()
                .then(categories => {
                    set({categories,loading: false})
                    return categories
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getById:  (id:string) => get().categories.find(category=> category.id === id),
        createCategory : async (formData:any) => {
            set({loading: true})

            return baseService(URL_CATEGORY)
                .create<Category>(formData)
                .then(category=>{
                    const categories = get().categories
                    categories.push(category)
                    set({categories,loading: false})
                    return category
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        deleteCategoryById: (id: string)=>{
            set({loading: true})
            return baseService(URL_CATEGORY)
                .remove(id)
                .then(_=>{
                    const categories = get().categories
                    const newCategories = categories.filter(category=> category.id !== id)
                    set({categories: newCategories, loading: false})
                    return
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        updateCategory: (categoryId: string, formData:any) =>{
            set({loading: true})
            return baseService(URL_CATEGORY)
                .update<Category>(categoryId, formData)
                .then(categoryUpdated=>{

                    set({
                        categories: UPDATE_BY_ID(get().categories, categoryUpdated) ,
                        loading: false
                    })
                    return categoryUpdated
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
    })
)