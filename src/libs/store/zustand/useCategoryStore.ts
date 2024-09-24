import { Category } from '@/Models/Category'
import { baseService } from '@/Services/base.service'
import { URL_CATEGORY } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    categories: Category[],
    loading: boolean
    list: () => Promise<Category[]>
    getById: (id: string) => Category | undefined
    createCategory: (product: any)=> Promise<Category>
}

export const useCategoryStore = create<Props>(
    (set, get) => ({
        categories: [],
        loading: false,
        list: async () => {
            if(!get().categories.length){
                set({loading: true})
                return baseService(URL_CATEGORY).list<Category[]>()
                .then(categories => {
                    set({categories,loading: false})
                    return categories
                })
            }
            return get().categories
        },
        getById:  (id:string) => get().categories.find(category=> category.id === id),
        createCategory : async (formData:any) => {
            set({loading: true})

            const category = await baseService(URL_CATEGORY).create<any>(formData)
            const categories = get().categories

            categories.push(category)
            set({categories,loading: false})
            
            return category
        }
    })
)