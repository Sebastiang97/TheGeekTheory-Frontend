import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { PreviewImages } from "@@/ImageComponents/PreviewImages/PreviewImages"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { InputFields } from "@/Models/InputFields"
import { ADD_INPUT_VALUES } from "@/helpers/AddInputValue"


interface Props {
  getSubData: (productData: FormData, isCancel:boolean)=> void
  initialValues: any
  mode: string
}

export const ActionsSubCategories2 = ({getSubData, mode, initialValues}:Props) => {
  const { t } = useTranslation(["translation"])
  const [isFirst, setIsFirst] = useState(false)
  const [inputs, setInputs] = useState<InputFields[]>(JSON.parse(JSON.stringify(inputAdminFields)))
  const [images, setImages ]= useState<string[]>([])
  const [currentImage, setCurrentImage ]= useState<string>("")

  const getImgs = (values:any)=>{
    if(values.files?.length){
      let img: string[] = []
      values.files.map((file:any)=>{
        img.push(URL.createObjectURL(file))
      })
      setCurrentImage(img[0])
      setImages(img)
    }
  }

  const getValues = (values:any)=>{
    const formData: FormData = new FormData();

    Object.keys(values).map((key)=>{
      if(key === "files"){
        values[key].map((value: any)=>{
          formData.append("file", value);  
        })
      }else{
        formData.append(key, values[key]);
      }
      
    })
    
    getSubData(formData, false)
    
  }

  // useEffect(() => {
  //   if (params.id !== ACTIONS.CREATE) {
  //   }
  //   inputAdminFields.map(input=> {
  //     if(input.name === "categoryId"){
  //       input.options = categories.map(category => ({id: category.id, label: category.name}))
  //     }
  //   })

  // }, [categories])


  useEffect(() => {
    if(mode == ADMIN_MODE.edit){
      console.log(initialValues)
      let intAdmin: InputFields[] = ADD_INPUT_VALUES(inputAdminFields, initialValues)
      setInputs(intAdmin)
    }
    setIsFirst(true)
  }, [])

  return (
    <>

      <div className="container">
        <div className="actions">
          <h3>Crear Subcategoria</h3>
          <button 
            onClick={()=>getSubData(new FormData(), true)}
          >
              volver
          </button>
        </div>
        {
          images.length
          ? <PreviewImages images={images} currentImage={currentImage}/>
          : <div>Sin fotos subidas</div>
        }

        {isFirst && (
          <FormDinamic
            inputFields={inputs}
            actions={actions}
            getImgs={getImgs}
            getValues={getValues}
            getOnChanges={()=>{}}
          />
        )}
      </div>
    </>
  )
}