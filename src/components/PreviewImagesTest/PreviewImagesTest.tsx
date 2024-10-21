import { SelectImage } from "@/Models/SelectImages"
import { CarouselAdminTest } from "@@/CarouselAdminTest/CarouselAdminTest"
import { useState } from "react"

interface Props {
  images: SelectImage[]
  currentImage: SelectImage
  selectMainImage: (img: SelectImage)=> void
  deleteImage: (id: string)=> void
}

export const PreviewImagesTest = ({ images, currentImage, selectMainImage, deleteImage }: Props) => {
  const [img, setImg] = useState<SelectImage>(currentImage)

  const getCurrentImage = (img: SelectImage) => {
    setImg(img)
  }
  return (
    <>
      {
        images.length && (
          <>
            <div className="h-96 w-full flex justify-center">
              <img
                className="object-contain"
                src={img.url}
                alt={"asdf"} 
              />
            </div>

            <CarouselAdminTest
              img={images}
              getCurrentImage={getCurrentImage}
              currentImage={currentImage.id}
              selectMainImage={selectMainImage}
              deleteImage={deleteImage}
            />
          </>
        )
      }
    </>
  )
}
