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
    values.categoryId = "c5062dbc-0fb1-41dc-8297-b9b003dc1d7a"
    values.subCategoryId = "71a360b5-36d2-4047-b553-a33b6290df98"
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
