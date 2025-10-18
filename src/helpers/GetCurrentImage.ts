import {  ColorImageSizes } from "@/Models/GeneralProduct"

export const GET_CURRENT_IMAGE = (colorImageSize :ColorImageSizes[]):string =>{
    if(colorImageSize?.length){
        if(colorImageSize.length ){
            return colorImageSize[0].image
        }
    }
    return ""
}

export const FILTER_CURRENT_IMAGE_BY_COLOR = (colorImageSize :ColorImageSizes[], color:string):string =>{
    if(colorImageSize?.length){
        if(colorImageSize.length ){
            let colorImage = colorImageSize.find(colorsImage=> colorsImage.color===color)
            if(colorImage){
                return colorImage.image
            }
        }
    }
    return ""
}

export const FILTER_POSITION_CURRENT_IMAGE_BY_COLOR = (colorImageSize :ColorImageSizes[], color:string):number =>{
    if(colorImageSize?.length){
        if(colorImageSize.length ){
            let indexImage = colorImageSize.findIndex(colorsImage=> colorsImage.color===color)
            if(indexImage === -1){
                return 0
            }
            return indexImage
        }
    }
    return 0

}
