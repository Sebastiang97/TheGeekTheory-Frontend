import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { CarouselComponent } from "@@/CarouselsComponents/CarouselComponent/CarouselComponent"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { useState } from "react"
import { NotImageComponent } from "@@/ImageComponents/NotImageComponent/NotImageComponent"
import { ImageAddItem } from "@@/forms/ImageCarouselItem/ImageAddItem"

interface Props {
  img              : string
  imgs             : string[]
  getCurrentImage  : (imgs:string)=> void
  mode             : string
  currentImage     : number
}
 
export function CarouselModComponent({img, imgs, getCurrentImage, currentImage, mode}:Props) {
  const [image, setImg] = useState<string>(img)
  const [images, setImgs] = useState<string[]>(imgs)
  
  const getCurrentImg = (currentImage:string) =>{
    setImg(currentImage)
  }


  return (
    <>
      {
        mode === GENERALPRODUCTMODE.ADD 
        && 
        <>
          <NotImageComponent />
        </>
      }
      {
        mode === GENERALPRODUCTMODE.EDIT 
        &&
        <>
        <section className="ImageView">
          <section className="first">
            <MarkImage  url={img} alt="asd"/>
          </section>
  
          <section className="second">
  
            <CarouselComponent 
              imgs={imgs} 
              getCurrentImage={getCurrentImg}
              currentImage={currentImage}
            />
          </section>
        </section>
          {/* <section className="ImageView">
            <article className="first">
              <MarkImage  url={img} alt="asd"/>
            </article>
            <article className="flex justify-center">
              <CarouselComponent 
                imgs={imgs} 
                getCurrentImage={getCurrentImg}
                currentImage={currentImage}
              />
            </article>
          </section> */}
        </>
      }
    </>
  )
}