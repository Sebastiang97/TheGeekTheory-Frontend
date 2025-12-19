import { ColorImageSize, ColorImageSizes } from "@/Models/GeneralProduct";
import { Product } from "@/Models/Product";

export const GET_COLORS = (products: Product[], size:string):string[] =>{
    let colors: string[] = []
    products.forEach(product =>{
        if(!colors.some(color => color === product.color) && size === product.size){
            colors.push(product.color)
        }
    })
    return colors
}

export const GET_COLORS_FROM_COLORIMAGESSIZE = (colorImageSize: ColorImageSize[]):string[] =>{
    let colors: string[] = []
    colorImageSize.forEach(colorImgSize=>{
        colorImgSize.colorsImages.forEach(cImg=>{
            if(!colors.includes(cImg.color)){
                colors.push(cImg.color)
            }
        })
    })
    return colors
}

export const GET_COLORS_FROM_COLORIMAGESSIZES = (colorImageSize: ColorImageSizes[]):string[] =>{
    let colors: string[] = []
    if(colorImageSize.length){
        return Array.from(new Set(colorImageSize.map(colorImgSize=> colorImgSize.color)))
    } 
    return colors
}