import { useState } from "react"
import { ImageAddItem } from "@@/forms/ImageCarouselItem/ImageAddItem"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@@/ui/carousel"
import "./CarouselComponentAdd.css"

interface Props {
  imgs: string[]
  getCarouselImages: (img:string[])=> void
}

export const CarouselComponentAdd = ({imgs, getCarouselImages}:Props) => {
  const [images, setImages] = useState<string[]>(imgs)
  const getImages = (imgs:string[]) => {
    setImages(imgs)
    getCarouselImages(imgs)
  }

  return (
    <Carousel
      className="w-96 "
    >
      <CarouselContent>
        <CarouselItem className="imageItem md:basis-1/2 lg:basis-1/2">
          <ImageAddItem
            name="img" 
            getImages={(imgs:string[])=> {getImages(imgs)}}
            isMultipleImage={true}
          />
        </CarouselItem>
        {images.map((img, index) => (
          // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2" onClick={() => getCurrentImage(img)}>
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 mx-1">
            <div className="imageItem flex aspect-square items-center justify-center">
              <MarkImage url={img} alt="asd"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="bg-orange-600 text-white"/>
      <CarouselNext className="bg-orange-600 text-white"/>
       */}
      <CarouselPrevious className="no-button color-main"/>
      <CarouselNext className="no-button color-main"/>
       
    </Carousel>
  )
}
