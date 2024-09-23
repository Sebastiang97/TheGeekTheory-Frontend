import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { List } from "@@/List/List"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
export const Products = () => {
  const { t } = useTranslation(["translation"])
  const products = useProductStore(state=>state.products)
  const list = useProductStore(state=>state.list)
  const navigate = useNavigate()

  useEffect(()=>{
    list()
  },[])

  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("components.admin.products")}</h2>
        <div className="actions end">
          <button
            onClick={() => navigate("/admin/products/actions/create")}>
            {t("components.admin.actions.new")}
          </button>
        </div>
      </div>
      <List elements={products} typeCard="product" className="list" />
    </div>
  )
}


