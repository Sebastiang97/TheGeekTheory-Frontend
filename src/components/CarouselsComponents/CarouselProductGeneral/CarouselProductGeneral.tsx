import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { CarouselComponent } from "@@/CarouselsComponents/CarouselComponent/CarouselComponent"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { useState } from "react"
import "./CarouselProductGeneral.css"
import { NotImageComponent } from "@@/ImageComponents/NotImageComponent/NotImageComponent"

interface Props {
  imgs: string[]
  getCurrentImage: (imgs:string)=> void
  mode: string
}
 
export function CarouselProductGeneral({imgs, getCurrentImage, mode}:Props) {
  const [img, setImg] = useState(imgs[0])
  
  const currentImage = (currentImage:string) =>{
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
            <article>
              <MarkImage  url={img} alt="asd"/>
            </article>
            <article className="flex justify-center">
              <CarouselComponent imgs={imgs} getCurrentImage={currentImage}/>
            </article>
          </section>
        </>
      }
    </>
  )
}