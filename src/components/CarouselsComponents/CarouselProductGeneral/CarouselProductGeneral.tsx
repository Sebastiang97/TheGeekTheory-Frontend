import { GENERALPRODUCTMODE } from "@/constants/GeneralProduct.constants"
import { CarouselComponent } from "@@/CarouselsComponents/CarouselComponent/CarouselComponent"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { useEffect, useState } from "react"
import "./CarouselProductGeneral.css"
import { NotImageComponent } from "@@/ImageComponents/NotImageComponent/NotImageComponent"

interface Props {
  imgs: string[]
  img: string
  getCurrentImage  : (imgs:string)=> void
  mode             : string
  currentImage     : number
}
 
export function CarouselProductGeneral({imgs, img, getCurrentImage, currentImage, mode}:Props) {
  const [imgMain, setImgMain] = useState(img)
  
  const getCurrentImg = (currentImage:string) =>{
    setImgMain(currentImage)
  }

  useEffect(() => {
    setImgMain(img)
  }, [img])
  
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
              <MarkImage  url={imgMain} alt="asd"/>
            </article>
            <article className="flex justify-center">
              <CarouselComponent 
                imgs={imgs} 
                getCurrentImage={getCurrentImg}
                currentImage={currentImage}
              />
            </article>
          </section>
        </>
      }
    </>
  )
}