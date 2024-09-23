import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"

export const ActionsCategories = () => {
  const { t } = useTranslation(["translation"])
  const navigate = useNavigate()
  const createCategory = useCategoryStore(state => state.createCategory)
  const params = useParams()

  

  const getValues = (values:any)=>{
    createCategory(values)
      .then(_=>{
        navigate("/admin/categories")
      }).catch(error=>{
        console.log(error)
      })
  }

  useEffect(() => {
    if (params.id !== ACTIONS.CREATE) {
    }
  }, [])

  return (
    <>

      <div className="container">
        <div className="actions">
          <button
            onClick={() => navigate("/admin/products/")}>
            {t("components.admin.actions.back")}
          </button>
        </div>
        
        <FormDinamic
          inputFields={inputAdminFields}
          actions={actions}
          getImgs={() => {}}
          getValues={getValues}
          getOnChanges={()=>{}}
          />
      </div>
    </>
  )
}