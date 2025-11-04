import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral"
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputProductFields } from "./actionADD"
import { useGeneralProductStore } from "@/libs/store/zustand/useGeneralProductStore"


import "./TestComponent3.css"


const IMAGES = [
  "https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORWHWNa7iRaL0xHXjXe3qHkjdjOxOdQFqcGtPWsGDw6I0IYJ-Wa3SoCKtD8_ZqTOQphw&usqp=CAU",
  "https://davedalessiowrites.wordpress.com/wp-content/uploads/2022/12/eva-pilot-00.jpeg",
  "https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORWHWNa7iRaL0xHXjXe3qHkjdjOxOdQFqcGtPWsGDw6I0IYJ-Wa3SoCKtD8_ZqTOQphw&usqp=CAU",
  "https://davedalessiowrites.wordpress.com/wp-content/uploads/2022/12/eva-pilot-00.jpeg"
]

export const TestComponent3 = () => {
  const createGeneralProduct = useGeneralProductStore(state=> state.createGeneralProduct)
  const getValues = (values:any)=>{
    values.categoryId = "1d0be84d-b0e0-4e5c-8b48-10686f748473"
    values.subCategoryId = "d998e9d8-ce57-4f69-9bdd-f4766626d1fb"
    values.isVisible = true
    delete values.tags
    console.log({values})
    createGeneralProduct(values)
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
            <CarouselProductGeneral 
              img=""
              currentImage={0}
              getCurrentImage={()=>{}}  
              imgs={IMAGES}
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
