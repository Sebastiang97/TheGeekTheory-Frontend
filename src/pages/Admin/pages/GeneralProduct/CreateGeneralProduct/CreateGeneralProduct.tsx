import { useState } from "react"
import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral"
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputProductFields } from "./actionADD"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"


import { BackIcon } from "@@/icons/BackIcon"
import { useLocation, useNavigate } from "react-router-dom"
import { GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { TypeExtraParams } from "@@/forms/FomDinamic/FormsDinamix.models"
import { useTagStore } from "@/libs/store/zustand/useTagStore"
import { UPDATE_FIELD_INPUT } from "@/helpers/UpdateFieldInput"
import { InputFields } from "@/Models/InputFields"
import "./CreateGeneralProduct.css"
import { PATH_ADMIN } from "@/helpers/pathAdmin"

export const CreateGeneralProduct = () => {
  const { pathname } = useLocation()

  const [formFields, setFormFields] = useState<InputFields[]>(inputProductFields)
  const navigate = useNavigate()
  const createGeneralProduct = useGeneralProductStore(state=> state.createGeneralProduct)
  const loading = useGeneralProductStore(state=> state.loading)
  
  const getTagByName = useTagStore(state=> state.getTagByName)
  const createTag = useTagStore(state=> state.createTag)
  

  const getValues = (values:any)=>{
    values.categoryId = "1d0be84d-b0e0-4e5c-8b48-10686f748473"
    values.subCategoryId = "d998e9d8-ce57-4f69-9bdd-f4766626d1fb"
    values.isVisible = true
    // delete values.tags
    console.log({values})
    if(!loading){
      createGeneralProduct(values)
        .then(res=>{
          GET_SUCCESS_MESSAGE("Producto creado correctamente")
          navigate(`${PATH_ADMIN(pathname)}/CatalogGeneralProducts`)
        })
        .catch(err=>{
          GET_ERROR_MESSAGE()
        })
    }
  }

  const handleExtra = (types:TypeExtraParams) => {
    console.log({types})
    getTagByName(types.values.tag)
      .then(tags=>{
        if(!tags.length){
          createTag({
            name: types.values.tag
          })
            .then(tag=>{
              console.log({tag})
              let newTag = tag.name
              // setFormFields(UPDATE_FIELD_INPUT(formFields,"addTags", [newTag]))
            })
        }

        if(tags.length){
          let newTags = tags.map(tag=> tag.name)
          // setFormFields(UPDATE_FIELD_INPUT(formFields,"addTags", newTags))
        }
      })
  }
  
  
  return (
    <>
      <section className="container">
        <BackIcon  onClick={() => navigate(-1)}/>
        
        <TitleSubtitle 
          title="Crear Productos generales" 
          subtitle=""
        />
        <section className="generalProduct">
          <section className="carouselGeneralProduct">
            <CarouselProductGeneral 
              img=""
              currentImage={0}
              getCurrentImage={()=>{}}  
              imgs={[]}
              mode={GENERALPRODUCTMODE.ADD}
            />
          </section>
          
          <FormDinamic
            key={JSON.stringify(formFields)}
            inputFields={formFields}
            actions={actions}
            getExtra={handleExtra}
            getValues={getValues}
            getOnChanges={getValues}
          />
        </section>
      </section>
    </>
  )
}
