import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral"
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputProductFields } from "./actionADD"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"


import "./CreateGeneralProduct.css"
import { BackIcon } from "@@/icons/BackIcon"
import { useNavigate } from "react-router-dom"
import { GET_ERROR_MESSAGE, GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"

export const CreateGeneralProduct = () => {
  const navigate = useNavigate()
  const createGeneralProduct = useGeneralProductStore(state=> state.createGeneralProduct)
  const loading = useGeneralProductStore(state=> state.loading)

  const getValues = (values:any)=>{
    values.categoryId = "49b29431-a9fc-4659-bfc1-70d5cd018022"
    values.subCategoryId = "72d90b73-beac-4940-9129-ba887751fa08"
    values.isVisible = true
    delete values.tags
    console.log({values})
    if(!loading){
      createGeneralProduct(values)
        .then(res=>{
          GET_SUCCESS_MESSAGE("Producto creado correctamente")
          navigate("/CatalogGeneralProducts")
        })
        .catch(err=>{
          GET_ERROR_MESSAGE()
        })
    }
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
            inputFields={inputProductFields}
            actions={actions}
            getExtra={()=>{}}
            getValues={getValues}
            getOnChanges={getValues}
          />
        </section>
      </section>
    </>
  )
}
