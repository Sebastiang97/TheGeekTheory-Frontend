import { ColorImageSize, ColorImageSizes } from "@/Models/GeneralProduct"

export const GET_CURRENT_COLOR = (colorImageSize :ColorImageSizes[]):string =>{
    if(colorImageSize.length ){
        return colorImageSize[0].color
    }
    return ""
}