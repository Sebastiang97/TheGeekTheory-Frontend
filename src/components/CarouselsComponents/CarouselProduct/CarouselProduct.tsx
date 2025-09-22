import { useState } from "react"
import { CarouselComponentAdd } from "../CarouselComponentAdd/CarouselComponentAdd"
import "./CarouselProduct.css"
import { ImageAddItem } from "@@/forms/ImageCarouselItem/ImageAddItem"

interface Props {
  imgs: string[]
  getCurrentImage: (imgs:string)=> void
}
 
export function CarouselProduct({imgs, getCurrentImage}:Props) {
  const [img, setImg] = useState(imgs.length ? imgs[0] : [])
  
  const currentImage = (currentImage:string) =>{
    setImg(currentImage)
  }

  const getImagesPrimary = (imagesPrimary:string[]) =>{
    console.log({imagesPrimary})
  }

  const getCarouselImages = (imagesSecond:string[]) =>{
    console.log({imagesSecond})
  }

  return (
    <>
      
      <section className="ImageView">
        <section className="first">
          <ImageAddItem
            name="img"
            getImages={(imgs:string[])=> {getImagesPrimary(imgs)}} 
            isMultipleImage={false}
          />
        </section>

        <section className="second">

          <CarouselComponentAdd 
            getCarouselImages={getCarouselImages}
            imgs={imgs}
          />
        </section>
      </section>
    </>
  )
}