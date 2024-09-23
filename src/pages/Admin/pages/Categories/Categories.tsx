import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { List } from "@@/List/List"

export const Categories = () => {
  const { t } = useTranslation(["translation"])
  const categories  = useCategoryStore(state=> state.categories)
  
  const list  = useCategoryStore(state=> state.list)
  const navigate = useNavigate()


  useEffect(()=>{
    list()
  },[])
  
  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("Categorias")}</h2>
        <div className="actions end">
          <button
            onClick={() => navigate("/admin/categories/actions/create")}>
            {t("components.admin.actions.new")}
          </button>
        </div>
      </div>
      {/* <List elements={products} typeCard="product" className="list" /> */}
      <ul>
        {
          categories.map((category) => (
              <li key={category.id}>{category.id} - {category.name}</li>
            ))
        }
      </ul>
    </div>
  )
}

