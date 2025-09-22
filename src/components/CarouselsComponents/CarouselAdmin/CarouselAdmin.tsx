import { MouseEvent, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
  img: string[]
  getCurrentImage: (img:string)=> void
}
 
export function CarouselAdmin({img, getCurrentImage}:Props) {
  const [imageChecked, setImageChecked]  = useState("")
  const handleImage = (e:MouseEvent<any>, img:string) =>{
    e.stopPropagation()
    console.log(img)
    setImageChecked(img)
  }
  return (
    <Carousel
      
      className="w-full "
    >
      <CarouselContent>
        {img.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3" onClick={() => getCurrentImage(img)}>
            <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <img src={img} alt="image" />
                </div>
                <div className="flex justify-center">
                  <label htmlFor=""></label>
                  <input
                    id={"radio"+img} 
                    type="radio" 
                    className="mr-3"
                    checked={img === imageChecked}
                    onClick={(e)=> handleImage(e,img)}
                    onChange={()=>{}}
                  />
                  <label 
                    htmlFor={"radio"+img}
                    onClick={(e)=> handleImage(e,img)}
                    >
                    Imagen Principal
                  </label>
                  
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-orange-600 text-white"/>
      <CarouselNext className="bg-orange-600 text-white"/>
    </Carousel>
  )
}