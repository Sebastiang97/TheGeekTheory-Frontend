import { ColorImageSize, ColorImageSizes } from "@/Models/GeneralProduct";

export const COLOR_IMAGE_SIZE_ADAPTER = (colorImageSize:ColorImageSize[]):ColorImageSizes[] => {

    let colorImageSizes: ColorImageSizes[] = []
    colorImageSize.forEach(c => {
        c.colorsImages.forEach(cImgs=>{
            let sizes: string[] = []
            cImgs.size.forEach(s=> sizes.push(s.size))
            colorImageSizes.push({
                color: cImgs.color,
                image: cImgs.image,
                sizes: sizes
            })
        })
    })
    return colorImageSizes

}


