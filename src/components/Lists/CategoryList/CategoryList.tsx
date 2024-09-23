import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { useEffect, useState } from "react"


interface Props {
    getCurrentCategoryId: (CategoryId: string) => any
}

export const CategoryList = ({getCurrentCategoryId}: Props) => {
    const categories = useCategoryStore(state => state.categories)
    const listCategories = useCategoryStore(state => state.list)
    const [activeCategory, setActiveCategory] = useState<string>("")

    const changeCategory =  (categoryId:string) => {
        getCurrentCategoryId(categoryId)
        setActiveCategory(categoryId)

    }

    useEffect(() => {
        listCategories().then(categories=>{
            if(categories[0]?.id){
                setActiveCategory(categories[0]?.id)
                getCurrentCategoryId(categories[0]?.id)
            }
        })
    }, [])

    return (
        <section className="categories">
            <div className="container">
                {
                    categories.length &&
                    categories.map(category => (
                        <button
                            className={activeCategory === category.id ? "" : "secondary"}
                            onClick={() => changeCategory(category.id)}
                            key={category.id}>
                            {category.name}
                        </button>
                    ))
                }
            </div>
        </section>
    )
}
