import { Category } from "@/Models/Category"
import { TypeActions } from "@/Models/TypeActions"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"
import "./CategoryList.css"

interface Props {
    categories: Category[]
    currentCategory: Category
    getCurrentCategoryId: (Category: Category) => any
    typeEvent?: (type:TypeActions, id:string)=> void

}

export const CategoryList = ({categories, currentCategory, getCurrentCategoryId, typeEvent}: Props) => {
    // const categories = useCategoryStore(state => state.categories)
    // const [activeCategory, setActiveCategory] = useState<Category>({} as Category)

    const changeCategory =  (category:Category) => {
        getCurrentCategoryId(category)
        // setActiveCategory(category)

    }

    return (
        <section className="categories">
            <div className="containerCategory">
                {
                    categories.length &&
                    categories.map(category => (
                        <div 
                            key={category.id}
                            >
                            {(typeEvent && currentCategory.id === category.id)&& (
                                <AdminOptions  
                                    typeEvent={(type)=> typeEvent(type, category.id)}
                                />
                            )}
                            <button
                                className={currentCategory.id === category.id ? "" : "secondary"}
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
