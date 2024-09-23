import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { PreviewImages } from "@@/PreviewImages/PreviewImages"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"

export const ActionsProducts = () => {
  const { t } = useTranslation(["translation"])
  const navigate = useNavigate()
  
  const category = useCategoryStore(state => state.categories)
  const listCategories = useCategoryStore(state => state.list)

  const subCategories = useSubCategoryStore(state => state.subCategories)
  const getSubByCategoryId = useSubCategoryStore(state => state.getSubByCategoryId)

  const createProduct = useProductStore(state => state.createProduct)
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
    values.color = {"code":"#fff","name":"Negro"}

    values.size = {"code":"M","name":"Medium"}
    values.description = "descripcion"
    values.quantity = 12
    delete values.categoryId 
    Object.keys(values).map((key)=>{
      if(key === "files"){
        values[key]?.map((value: any)=>{
          formData.append("file", value);  
        })
      }else if(key === "color" || key === "size"){
        formData.append(key,  JSON.stringify(values[key]));
      }else{
        formData.append(key, values[key]);
      }
    })
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    createProduct(formData)
      .then(_=>{
        navigate("/admin/products")
      }).catch(error=>{
        console.log(error)
      })
    
  }

  const getOnChanges = (values:any)=>{
    console.log(values)
    if(values.name === "categoryId"){
      getSubByCategoryId(values.value)
        .then(subCategories=>{
          inputAdminFields.map(input=> {
            if(input.name === "subCategoryId"){
              input.options = [...subCategories].map(subCategory => ({id: subCategory.id, label: subCategory.name}))
            }
          })
        }).catch(err=> console.log(err))
    }
  }

  useEffect(()=>{
    listCategories()
  },[])

  useEffect(() => {
    if (params.id !== ACTIONS.CREATE) {
    }
    inputAdminFields.map(input=> {
      if(input.name === "categoryId"){
        input.options = category.map(category => ({id: category.id, label: category.name}))
      }
    })

  }, [category])

  return (
    <>

      <div className="container">
        <div className="actions">
          <button
            onClick={() => navigate("/admin/products/")}>
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
          getImgs={getImgs}
          getValues={getValues}
          getOnChanges={getOnChanges}
          />
      </div>
    </>
  )
}

