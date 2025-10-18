import { ColorImageSize } from "@/Models/GeneralProduct"

export const GET_CURRENT_SIZE = (colorImageSize :ColorImageSize[]):string =>{
    if(colorImageSize?.length){
        if(colorImageSize[0].colorsImages.length ){
            if(colorImageSize[0].colorsImages[0].size){
                return colorImageSize[0].colorsImages[0].size[0].size
            }
        }
    }
    return ""
}