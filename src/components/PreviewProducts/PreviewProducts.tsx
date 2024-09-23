import { CarouselProducts } from "@@/CarouselProducts/CarouselProducts"
import { useState } from "react"

interface Props {
    images: string[]
    currentImage: string
}

export const PreviewProducts = ({images, currentImage}:Props) => {

  const [img, setImg ]= useState<string>(currentImage)

  const getCurrentImage = (img:string) => {
    console.log({img})
    setImg(img)
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
    
              <CarouselProducts
                imgs={images}
                getCurrentImage={getCurrentImage}
              />
            </>
          )
        }
    </>
  )
}
