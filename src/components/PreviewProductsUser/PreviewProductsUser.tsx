import { CarouselProductsUser } from "@@/CarouselProductsUser/CarouselProductsUser"
import { useState } from "react"

interface Props {
    images: string[]
    currentImage: string | any
}

export const PreviewProductUsers = ({images, currentImage}:Props) => {

  const [img, setImg ]= useState<string | any>(currentImage)

  const getCurrentImage = (img:string | any) => {
    setImg(img.url)
  }
  return (
    <>
         {/* {
          images.length && (
            images.map((img,i)=>(
              <img key={i} src={img} alt={"asdf"} />
            ))
          )
        } */}
        {
          images.length && (
            <>
              <div className="h-96 w-full flex justify-center">
                <img 
                  className="object-contain" 
                  src={img} 
                  alt={"asdf"} />
              </div>
    
              <CarouselProductsUser
                imgs={images}
                getCurrentImage={getCurrentImage}
              />
            </>
          )
        }
    </>
  )
}
