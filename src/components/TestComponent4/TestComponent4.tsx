import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputProductFields } from "./actionADD"
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore"
import { CarouselProduct } from "@@/CarouselsComponents/CarouselProduct/CarouselProduct"
import "./TestComponent4.css"
import { SET_FORM_DATA_KEY_VALUE_OBJ } from "@/helpers/SetFormDataKeyValueObj"

export const TestComponent4 = () => {
  const createProductIndividual = useProductIndividualStore(state=> state.createProductIndividual)
  const getValues = (values:any)=>{
    values.categoryId = "0420a4f7-6b9a-41de-a69e-c9048ec3adc9"
    values.subCategoryId = "5ae5bc9d-3d2d-4de4-ba02-25b8e1c99697"
    values.generalProductId = "c9b17654-0caf-4dde-b061-4935a1c09112"
    values.isVisible = true
    values.typeStamping = "test"
    delete values.tags
    console.log({values})
    const formData: FormData = SET_FORM_DATA_KEY_VALUE_OBJ(values)
    createProductIndividual(formData)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  
  
  return (
    <>
      <section className="container">
        <TitleSubtitle 
          title="Camisetas Manga corta" 
          subtitle="INT123456789"
        />
        <section className="generalProduct">
          <section className="carouselGeneralProduct">
            <CarouselProduct 
              getCurrentImage={()=>{}}  
              imgs={[]}
            />
          </section>
          
          <FormDinamic
            inputFields={inputProductFields}
            actions={actions}
            getExtra={(ims)=>{console.log({ims})}}
            getValues={getValues}
            getOnChanges={getValues}
          />
        </section>
      </section>
    </>
  )
}
