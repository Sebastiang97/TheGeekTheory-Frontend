import { ColorImage } from "@/Models/GeneralProduct"

export const FILTER_IMAGES = (colorImage: ColorImage[]):string[]=>{
    const images: string[] = []
    colorImage.forEach(cI=>{
        images.push(cI.color)
    })
    return images
}