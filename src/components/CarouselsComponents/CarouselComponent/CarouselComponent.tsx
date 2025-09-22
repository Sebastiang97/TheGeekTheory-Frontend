import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@@/ui/carousel"

interface Props {
    imgs: string[]
    getCurrentImage: (img:string)=> void
}

export const CarouselComponent = ({imgs, getCurrentImage}:Props) => {
  return (
    <Carousel
      
      className="w-96 "
    >
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2" onClick={() => getCurrentImage(img)}>
            <div className="">
                <div className="flex aspect-square items-center justify-center">
                    <MarkImage url={img} alt="asd"/>
                    {/* <img src={img} alt="asd" /> */}
                </div>
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
