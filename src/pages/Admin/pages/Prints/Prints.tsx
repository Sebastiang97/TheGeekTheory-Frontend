import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { usePrintStore } from "@/libs/store/zustand/usePrintStore"
import { ListPrint } from "@@/Lists/ListPrint/ListPrint"


export const Prints = () => {
  const { t } = useTranslation(["translation"])
  const prints = usePrintStore(state => state.prints)
  const loading = usePrintStore(state => state.loading)
  const list = usePrintStore(state => state.list)
  const navigate = useNavigate()
  
  useEffect(()=>{
    list()
  },[])
  
  return (
    <div className="container">
      <div className="adminTitle">
        <h2>Prints</h2>
        <div className="actions end">
          <button
            onClick={() => navigate("/admin/prints/actions/create")}>
            {t("components.admin.actions.new")}
          </button>
        </div>
      </div>
      <ListPrint 
        prints={prints}
        loading={loading}
        isShow={false}
        handleSelected={()=>{}}
      />
    </div>
  )
}

