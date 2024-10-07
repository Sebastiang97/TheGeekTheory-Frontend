import { SubCategory } from '@/Models/SubCategory'
import { baseService } from '@/Services/base.service'
import { URL_SUBCATEGORIES } from '@/constants/service.constant'
import { create } from 'zustand'

interface Props {
    subCategories: SubCategory[],
    subByCategoryId: SubCategory[],
    loading: boolean
    list: () => void
    getById: (id: string) => SubCategory | undefined
    createSubCategory: (product: FormData)=> Promise<SubCategory>
    getSubByCategoryId: (categoryId: string) => Promise<SubCategory[]>
    deleteSubById: (id: string)=> Promise<void>
}

export const useSubCategoryStore = create<Props>(
    (set, get) => ({
        subCategories: [],
        subByCategoryId: [],
        loading: false,
        list: () => {
            if(!get().subCategories.length){
                set({loading: true})
                baseService(URL_SUBCATEGORIES).list<SubCategory[]>()
                .then(subCategories => {
                    set({subCategories,loading: false})
                })
            }
        },
        getById:  (id:string) => get().subCategories.find(category=> category.id === id),
        getSubByCategoryId: async (categoryId:string) => {
            const subByCategoryId =  await baseService(URL_SUBCATEGORIES+"categoryId/"+categoryId).get<SubCategory[]>()
            set({subByCategoryId})
            return subByCategoryId
        },
        createSubCategory : async (formData:FormData) => {
            set({loading: true})

            const subCategory = await baseService(URL_SUBCATEGORIES).createFile<any>(formData)
            const subCategories = get().subCategories

            subCategories.push(subCategory)
            set({subCategories,loading: false})
            
            return subCategory
        },
        deleteSubById: (id: string)=>{
            return baseService(URL_SUBCATEGORIES).remove(id)
        }
    })
)