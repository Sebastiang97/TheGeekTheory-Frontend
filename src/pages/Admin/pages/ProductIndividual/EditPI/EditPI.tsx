
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { DynamicFormRef, FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputPIFields } from "./actionADD"
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore"
import { SET_FORM_DATA_KEY_VALUE_OBJ } from "@/helpers/SetFormDataKeyValueObj"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"
import { Loading } from "@@/Loading/Loading"
import { TYPE_EXTRA } from "@@/forms/FomDinamic/Forms.constants"
import { TypeExtraParams } from "@@/forms/FomDinamic/FormsDinamix.models"
import { InputFields } from "@/Models/InputFields"
import { BackIcon } from "@@/icons/BackIcon"
import { CarouselModComponent } from "@@/CarouselsComponents/CarouselModComponent/CarouselModComponent"
import { GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { FILTER_SIZES_BY_COLOR } from "@/helpers/GetSizes"
import "./EditPI.css"

export const EditPI = () => {
  const { generalProductId, productIndividualId } = useParams()
  const formRef = useRef<DynamicFormRef>(null)
  const navigate = useNavigate()

  const getGPById = useGeneralProductStore(state => state.getGPById)
  const generalProduct = useGeneralProductStore(state => state.generalProduct)
  const loading = useGeneralProductStore(state => state.loading)
  const loadingCreate = useProductIndividualStore(state => state.loading)
  const createProductIndividual = useProductIndividualStore(state => state.createProductIndividual)
  const updateProductIndividual = useProductIndividualStore(state => state.updateProductIndividual)
  const getById = useProductIndividualStore(state => state.getById)
  const product = useProductIndividualStore(state => state.product)
  
  

  // Estado para los campos del formulario
  const [formFields, setFormFields] = useState<InputFields[]>(inputPIFields)
  const [img, setImg] = useState<string>("")
  const [imgs, setImgs] = useState<string[]>([])

  const getValues = (values: any) => {
    console.log({ values })
    values.categoryId = "1d0be84d-b0e0-4e5c-8b48-10686f748473"
    values.subCategoryId = "d998e9d8-ce57-4f69-9bdd-f4766626d1fb"
    values.generalProductId = generalProductId
    values.isVisible = true
    values.typeStamping = "test"
    delete values.tags
    delete values.arraySize
    delete values.arrayColor
    
    const formData: FormData = SET_FORM_DATA_KEY_VALUE_OBJ(values)
    if(!loadingCreate){
      updateProductIndividual(product.id,formData)
        .then(res => {
          GET_SUCCESS_MESSAGE("Producto individual actualizado correctamente")
          navigate(-1)
        })
        .catch(err => GET_ERROR_MESSAGE())
    }
  }

  const handleGetExtras = ({ type, values }: TypeExtraParams) => {
    console.log({ type, values })
    if (type === TYPE_EXTRA.colors && formRef.current) {
      
      let sizes = FILTER_SIZES_BY_COLOR(generalProduct[0].colorImageSizes, values.current)
      if(sizes.length){
        formRef.current.setFieldValue('arraySize', sizes)
        formRef.current.setFieldValue('size', sizes[0])
      }else{
        formRef.current.setFieldValue('arraySize', [])
        formRef.current.setFieldValue('size', "")
      }
    }

    if (type === TYPE_EXTRA.main) {
      setImg(values.imgs[0])
    }

    if (type === TYPE_EXTRA.second) {
      setImgs(values.imgs)
    }

  }

  useEffect(() => {
    if (generalProductId) {
      getGPById(generalProductId)
    }
    if (productIndividualId) {
      getById(productIndividualId)
    }

  }, [])

  useEffect(() => {
    if (generalProduct.length > 0) {
      // const updatedFields = UPDATE_INPUT_ADMIN_COLORS_SIZE(
      //   inputPIFields,
      //   generalProduct,
      //   generalProduct[0]?.colorImageSizes.length ? generalProduct[0].colorImageSizes[0].color : ""
      // )
      // setFormFields(updatedFields)

    }
   
  }, [generalProduct])

  useEffect(() => {
    if(Object.keys(product).length){
      if(formRef.current){
        let imgMain:string = product.images?.length ? product.images[0]: ""
        let imgsSeconds = product.images?.length ? [...product.images]: [""]
        setImg(imgMain)
        setImgs(imgsSeconds)
        formRef.current.setValues({
          "imgMain": [imgMain],
          "imgSecond": [imgsSeconds],
          "arrayColor": [product.color],
          "color": product.color,
          "arraySize": [product.size],
          "size": product.size,
          "title": product.title,
          "quantity": product.quantity,
          "description": product.description,
          "isVisible": product.isVisible
        })
      }
    }
   
  }, [generalProduct])

  return (
    <section className="container">
      <Loading isLoading={loading} />
      <BackIcon onClick={() => navigate(-1)} />

      <TitleSubtitle title="Editar producto individual" subtitle={generalProduct[0]?.title} />
      <section className="generalProduct">
        <section className="carouselGeneralProduct">

          <CarouselModComponent
            getCurrentImage={() => { }}
            currentImage={0}
            imgs={imgs}
            img={img}
            mode="edit"
          />
        </section>
        <FormDinamic
          ref={formRef}
          key={JSON.stringify(formFields)}
          inputFields={formFields}
          actions={actions}
          getExtra={handleGetExtras}
          getValues={getValues}
          getOnChanges={() => { }}
        />
      </section>
    </section>
  )
}
