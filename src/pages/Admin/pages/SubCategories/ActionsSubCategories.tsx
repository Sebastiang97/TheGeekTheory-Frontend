import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { PreviewImages } from "@@/ImageComponents/PreviewImages/PreviewImages"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"

export const ActionsSubCategories = () => {
  const { t } = useTranslation(["translation"])
  const navigate = useNavigate()
  const list = useCategoryStore(state => state.list)
  const categories = useCategoryStore(state => state.categories)
  const createSubCategory = useSubCategoryStore(state => state.createSubCategory)
  const params = useParams()
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
    
    createSubCategory(formData)
      .then(_=>{
        navigate("/admin/subcategories")
      }).catch(error=>{
        console.log(error)
      })
    
  }

  useEffect(() => {
    list()
  },[])
  
  useEffect(() => {
    if (params.id !== ACTIONS.CREATE) {
    }
    inputAdminFields.map(input=> {
      if(input.name === "categoryId"){
        input.options = categories.map(category => ({id: category.id, label: category.name}))
      }
    })

  }, [categories])

  return (
    <>

      <div className="container">
        <div className="actions">
          <button
            onClick={() => navigate("/admin/subcategories/")}>
            {t("components.admin.actions.back")}
          </button>
        </div>
        {
          images.length
          ? <PreviewImages images={images} currentImage={currentImage}/>
          : <div>Sin fotos subidas</div>
        }
        <FormDinamic
          inputFields={inputAdminFields}
          actions={actions}
          getExtra={getImgs}
          getValues={getValues}
          getOnChanges={()=>{}}
          />
      </div>
    </>
  )
}