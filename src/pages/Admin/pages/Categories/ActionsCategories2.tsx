import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { InputFields } from "@/Models/InputFields"
import { ADD_INPUT_VALUES } from "@/helpers/AddInputValue"

interface Props {
  getCategoryData: (productData: any, isCancel:boolean)=> void
  initialValues: any
  mode: string
}

export const ActionsCategories2 = ({getCategoryData, initialValues, mode}:Props) => {
  const { t } = useTranslation(["translation"])
  const [isFirst, setIsFirst] = useState(false)
  const [inputs, setInputs] = useState<InputFields[]>(JSON.parse(JSON.stringify(inputAdminFields)))
  

  const getValues = (values:any)=>{
    getCategoryData(values, false)

  }

  useEffect(() => {
    if(mode == ADMIN_MODE.edit){
      let intAdmin: InputFields[] = ADD_INPUT_VALUES(inputAdminFields, initialValues)
      setInputs(intAdmin)
    }
    setIsFirst(true)
  }, [])

  return (
    <>

      <div className="container">
        <div className="actions">
          <h3>Crear Categoria</h3>
          <button 
            onClick={()=>getCategoryData({}, true)}
          >
            volver
          </button>
        </div>
        {isFirst && (
          <FormDinamic
            inputFields={inputs}
            actions={actions}
            getExtra={() => {}}
            getValues={getValues}
            getOnChanges={()=>{}}
          />
        )}
      </div>
    </>
  )
}