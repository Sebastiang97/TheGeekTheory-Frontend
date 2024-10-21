import { MouseEvent, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SelectImage } from "@/Models/SelectImages"
import { DeleteIcon } from "@@/icons/DeleteIcon"
import "./carouselAdmin.css"

interface Props {
  img: SelectImage[]
  getCurrentImage: (img: SelectImage) => void
  currentImage: string
  selectMainImage: (img: SelectImage) => void
  deleteImage: (id: string) => void
}

export function CarouselAdminTest({ img, getCurrentImage, currentImage, selectMainImage, deleteImage }: Props) {
  const [imageChecked, setImageChecked] = useState(currentImage)
  const handleImage = (e: any, img: SelectImage) => {
    e.stopPropagation()
    setImageChecked(img.id)
    selectMainImage(img)
  }
  return (
    <Carousel

      className="w-full "
    >
      <CarouselContent>
        {img.map((img, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3"
            onClick={() => getCurrentImage(img)}
          >
            <div className="p-1">
              <div className=" aspect-square  ">
                <div className="flex justify-end">
                  <div className="deleteIcon">
                    <DeleteIcon 
                      onClick={
                      (e) => {
                        e.stopPropagation()
                        deleteImage(img.id)
                      }}
                    />
                  </div>
                </div>
                {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                <img src={img.url} alt="image" />
              </div>
              <div className="flex justify-center">
                <input
                  id={"radio" + img.id}
                  type="radio"
                  className="mr-3"
                  checked={img.id === imageChecked}
                  onClick={(e) => handleImage(e, img)}
                  onChange={(e) => handleImage(e, img)}
                />
                <label
                  htmlFor={"radio" + img.id}
                  onClick={(e) => handleImage(e, img)}
                >
                  Imagen Principal
                </label>

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-orange-600 text-white" />
      <CarouselNext className="bg-orange-600 text-white" />
    </Carousel>
  )
}