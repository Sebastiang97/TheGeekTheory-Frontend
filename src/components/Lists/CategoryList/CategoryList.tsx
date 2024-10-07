import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { Category } from "@/Models/Category"
import { TypeActions } from "@/Models/TypeActions"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"
import { useEffect, useState } from "react"


interface Props {
    categories: Category[]
    getCurrentCategoryId: (Category: Category) => any
    typeEvent?: (type:TypeActions, id:string)=> void

}

export const CategoryList = ({categories, getCurrentCategoryId, typeEvent}: Props) => {
    // const categories = useCategoryStore(state => state.categories)
    const [activeCategory, setActiveCategory] = useState<Category>({} as Category)

    const changeCategory =  (category:Category) => {
        getCurrentCategoryId(category)
        setActiveCategory(category)

    }

    useEffect(() => {
        // listCategories().then(categories=>{
        //     if(categories[0]?.id){
        //         setActiveCategory(categories[0])
        //         getCurrentCategoryId(categories[0])
        //     }
        // })
        if(categories.length){
            setActiveCategory(categories[0])
            getCurrentCategoryId(categories[0])
        }
    }, [])

    return (
        <section className="categories">
            <div className="container items-end">
                {
                    categories.length &&
                    categories.map(category => (
                        <div 
                            key={category.id}
                            >
                            {(typeEvent && activeCategory.id === category.id)&& (
                                <AdminOptions  
                                    typeEvent={(type)=> typeEvent(type, category.id)}
                                />
                            )}
                            <button
                                className={activeCategory.id === category.id ? "" : "secondary"}
                                onClick={() => changeCategory(category)}
                                >
                                {category.name}
                            </button>
                        </div>
                    ))
                }

                {
                    !categories.length && (
                        <section className="category">
                            <div>
                                <h3>Crear SubCategoria</h3>
                                <p>no hay subcategorias crea una</p>
                            </div>
                            {typeEvent &&(
                                <AdminOptions
                                    typeEvent={(type)=> typeEvent(type, "")}
                                />
                            )}
                        </section>
                    )
                }
            </div>
        </section>
    )
}
