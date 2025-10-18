import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@@/ui/carousel"
import { useEffect, useState } from "react"

interface Props {
  imgs            : string[]
  currentImage   ?: number
  getCurrentImage : (img:string)=> void
}

export const CarouselComponent = ({imgs, currentImage, getCurrentImage}:Props) => {
const [api, setApi] = useState<CarouselApi>()

 
  useEffect(() => {
    if (!api) {
      return
    }

    if(typeof currentImage !== 'undefined' && currentImage >= 0){
      api.scrollTo(currentImage)
    }

  }, [api, currentImage])

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-96 "
      >
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem 
              key={index} 
              className="md:basis-1/2 lg:basis-1/2" 
              onClick={() => getCurrentImage(img)}
            >
              <div className="">
                <div className="flex aspect-square items-center justify-center">
                  <MarkImage url={img} alt="asd"/>
                  {/* <img src={img} alt="asd" /> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="no-button color-main"/>
        <CarouselNext className="no-button color-main"/>
        
      </Carousel>
    </>
  )
}
