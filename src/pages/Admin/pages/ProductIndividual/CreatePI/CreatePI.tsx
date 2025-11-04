
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputPIFields } from "./actionADD"
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore"
import { CarouselProduct } from "@@/CarouselsComponents/CarouselProduct/CarouselProduct"
import { SET_FORM_DATA_KEY_VALUE_OBJ } from "@/helpers/SetFormDataKeyValueObj"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"
import { Loading } from "@@/Loading/Loading"
import { UPDATE_INPUT_ADMIN_COLORS_SIZE } from "@/helpers/UpdateInputAdminFiles"
import { TYPE_EXTRA } from "@@/forms/FomDinamic/Forms.constants"
import { TypeExtraParams } from "@@/forms/FomDinamic/FormsDinamix.models"
import { InputFields } from "@/Models/InputFields"
import { BackIcon } from "@@/icons/BackIcon"
import { CarouselModComponent } from "@@/CarouselsComponents/CarouselModComponent/CarouselModComponent"
import { GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES, GET_IMAGES_FROM_COLORIMAGESSIZES } from "@/helpers/GetImages"
import "./CreatePI.css"
import { GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"

export const CreatePI = () => {
  const { generalProductId } = useParams()
  const navigate = useNavigate()
  
  const getGPById = useGeneralProductStore(state => state.getGPById)
  const generalProduct = useGeneralProductStore(state => state.generalProduct)
  const loading = useGeneralProductStore(state => state.loading)
  const loadingCreate = useProductIndividualStore(state => state.loading)
  const createProductIndividual = useProductIndividualStore(state => state.createProductIndividual)
  
  // Estado para los campos del formulario
  const [formFields, setFormFields] = useState<InputFields[]>(inputPIFields)
  const [img, setImg] = useState<string>("")
  const [imgs, setImgs] = useState<string[]>([])

  const getValues = (values: any) => {
    values.categoryId = "1d0be84d-b0e0-4e5c-8b48-10686f748473"
    values.subCategoryId = "d998e9d8-ce57-4f69-9bdd-f4766626d1fb"
    values.generalProductId = generalProductId
    values.isVisible = true
    values.typeStamping = "test"
    delete values.tags
    const formData: FormData = SET_FORM_DATA_KEY_VALUE_OBJ(values)
    if(!loadingCreate){
      createProductIndividual(formData)
        .then(res => {
          GET_SUCCESS_MESSAGE("Producto individual creado correctamente")
          navigate("/generalProduct/"+generalProductId)
        })
        .catch(err => GET_ERROR_MESSAGE())
    }
  }

  const handleGetExtras = ({type, values}:TypeExtraParams)=>{
    if(type === TYPE_EXTRA.colors){
      const updatedFields = UPDATE_INPUT_ADMIN_COLORS_SIZE(
        inputPIFields, generalProduct, 
        values.current
      )
      
      setFormFields(updatedFields)
      // let imgFiltered = GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES(
      //   generalProduct[0].colorImageSizes,
      //   values.current
      // )
      // imgFiltered && setImg(imgFiltered)

    }
    
    if(type === TYPE_EXTRA.main){
      setImg(values.imgs[0])
    }
    
    if(type === TYPE_EXTRA.second){
      setImgs(values.imgs)
    }

  }

  useEffect(() => {
    if (generalProductId) {
      getGPById(generalProductId)
    }
  }, [])

  useEffect(() => {
    if (generalProduct.length > 0) {
      const updatedFields = UPDATE_INPUT_ADMIN_COLORS_SIZE(
        inputPIFields, generalProduct, 
        generalProduct[0]?.colorImageSizes.length ? generalProduct[0].colorImageSizes[0].color : ""
      )
      setFormFields(updatedFields)

      // setImgs(GET_IMAGES_FROM_COLORIMAGESSIZES(
      //   generalProduct[0].colorImageSizes,
      // ))
      // setImg(GET_IMAGE_BY_COLOR_FROM_COLORIMAGESSIZES(
      //   generalProduct[0].colorImageSizes,
      //   generalProduct[0]?.colorImageSizes.length ? generalProduct[0].colorImageSizes[0].image : ""
      // ))
    }
  }, [generalProduct])
  
  return (
    <section className="container">
      <Loading isLoading={loading}/>
      <BackIcon  onClick={() => navigate(-1)}/>
      
      <TitleSubtitle title="Crear producto individual" subtitle={generalProduct[0]?.title} />
      <section className="generalProduct">
        <section className="carouselGeneralProduct">
          {/* <CarouselProduct 
            key={JSON.stringify(imgs)}
            getCurrentImage={() => { }} 
            imgs={imgs} 
          /> */}
          <CarouselModComponent
            getCurrentImage={()=> {} }
            currentImage={0}
            imgs={imgs}
            img={img}
            mode="edit"
          />
        </section>
        <FormDinamic
          key={JSON.stringify(formFields)}
          inputFields={formFields}
          actions={actions}
          getExtra={handleGetExtras}
          getValues={getValues}
          getOnChanges={getValues}
        />
      </section>
    </section>
  )
}