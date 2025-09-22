import { CarouselProductGeneral } from "@@/CarouselsComponents/CarouselProductGeneral/CarouselProductGeneral"
import "./TestComponent2.css"
import { TitleSubtitle } from "@@/TitleSubtitle/TitleSubtitle"

import { Tag } from "@@/Tag/Tag"
import { PlusIcon } from "@@/icons/PlusIcon"

import { GeneralProductCard } from "@@/Cards/GeneralProductCard/GeneralProductCard"
import { InfoGeneralProduct } from "@@/Infos/InfoGeneralProduct/InfoGeneralProduct"
import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"

const IMAGES = [
  "https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORWHWNa7iRaL0xHXjXe3qHkjdjOxOdQFqcGtPWsGDw6I0IYJ-Wa3SoCKtD8_ZqTOQphw&usqp=CAU",
  "https://davedalessiowrites.wordpress.com/wp-content/uploads/2022/12/eva-pilot-00.jpeg",
  "https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORWHWNa7iRaL0xHXjXe3qHkjdjOxOdQFqcGtPWsGDw6I0IYJ-Wa3SoCKtD8_ZqTOQphw&usqp=CAU",
  "https://davedalessiowrites.wordpress.com/wp-content/uploads/2022/12/eva-pilot-00.jpeg"
]

export const TestComponent2 = () => {
  
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
              getCurrentImage={()=>{}}  
              imgs={IMAGES}
              mode={GENERALPRODUCTMODE.EDIT}
            />
          </section>
          <InfoGeneralProduct 
            currency="COP"
            price="35.000"
            description="Ropa interior de 100% algodón, suave higiénica y permite el paso del aire en tu zona íntima. 
            Increíblemente cómoda y perfecta para uso diario."
            isVisible={true}
          />
          {/* <section className="infoProduct">
            <section>
              <span className="currency">COP</span>
              <span className="price">35.000</span>
            </section>
            <section>
              <p>
                Ropa interior de 100% algodón, suave higiénica y permite el paso del aire en tu zona íntima. 
                Increíblemente cómoda y perfecta para uso diario.
              </p>
            </section>
            <section>
              <h3>Visible</h3>
              <span>SI</span>
            </section>
            <section>
              <h3>Color</h3>
              <span>SI</span>
            </section>
          </section> */}
        </section>

        <section className="generalsTags">
          <h3>Tags</h3>
          <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>
          <section className="tags">
            <Tag title="Batman" />
            <Tag title="Evangelion" />
            <Tag title="Cowboy" />
          </section>
        </section>

        <section className="individualProducts">
          <h3>Productos individuales</h3>
          <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>

          <section className="containerCards">
            <section className="createProduct">
              <section>
                <h4>Crear product individual</h4>
              </section>
              <section className="containerPlus">
                <section className="plus">
                  <PlusIcon />
                </section>
              </section>
            </section>

            <GeneralProductCard 
              title="T-shirt weird"
              subtitle="weird design t-shirt"
              price="49.000"
              url="https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png"
            />

            <GeneralProductCard 
              title="T-shirt weird"
              subtitle="weird design t-shirt"
              price="49.000"
              url="https://studybreaks.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-1.02.36-AM-e1649664212572.png"
            />
          </section>

        
        </section>

      </section>

      
    </>
  )
}
