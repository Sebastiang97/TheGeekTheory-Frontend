import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputProductFields } from "./actionADD"
import { useProductIndividualStore } from "@/libs/store/zustand/useProductIndividualStore"
import { CarouselProduct } from "@@/CarouselsComponents/CarouselProduct/CarouselProduct"
import "./TestComponent4.css"
import { SET_FORM_DATA_KEY_VALUE_OBJ } from "@/helpers/SetFormDataKeyValueObj"

export const TestComponent4 = () => {
  const createProductIndividual = useProductIndividualStore(state=> state.createProductIndividual)
  const getValues = (values:any)=>{
    values.categoryId = "1d0be84d-b0e0-4e5c-8b48-10686f748473"
    values.subCategoryId = "d998e9d8-ce57-4f69-9bdd-f4766626d1fb"
    values.generalProductId = "9c796e33-173a-4556-ac4a-373d3f450c6c"
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
