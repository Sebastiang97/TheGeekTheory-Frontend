import { useEffect, useState } from "react"
import "./CarouselProduct.css"
import { ImageAddItem } from "@@/forms/ImageCarouselItem/ImageAddItem"
import { CarouselComponentModified } from "../CarouselComponentModified/CarouselComponentModified"

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

  
  useEffect(() => {
    if (imgs.length) {
    }
  }, [imgs])

  return (
    <>
      
      <section className="ImageView">
        <section className="first">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRe-XXhcJFEr49ipd3hGl9KztJILNdZnx2BXVize0G6EOxqyi1jMPasIAOwjUFHPDwUYgXrIKS6rgWcl7ynU4Hx2zi9Zmmlq62TBTGOYA" alt="" />
          <ImageAddItem
            name="img"
            getImages={(imgs:any)=> {getImagesPrimary(imgs)}} 
            isMultipleImage={false}
          />
        </section>

        <section className="second">

          <CarouselComponentModified 
            getCarouselImages={getCarouselImages}
            imgs={imgs}
          />
        </section>
      </section>
    </>
  )
}