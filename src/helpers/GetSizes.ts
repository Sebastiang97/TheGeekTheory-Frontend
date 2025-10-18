import { SIZE } from "@/constants/Size";
import { ColorImageSize, ColorImageSizes } from "@/Models/GeneralProduct";
import { Product } from "@/Models/Product";

export const GET_SIZES = (products: Product[]):string[] =>{
    let sizes: string[] = []
    products.forEach(product =>{
        if(!sizes.some(size => size === product.size)){
            sizes.push(product.size)
        }
    })
    return sizes
}

export const FILTER_SIZE = (products: Product[]) =>{
    const sizes = SIZE
    return SIZE
    // return sizes.filter(size => {
    //     let isSize = true
    //     products.forEach(product=>{
    //         if(size === product.size) {
    //             isSize = false
    //         }
    //     })
    //     return isSize
    // })
}

export const GET_SIZES_FROM_COLORIMAGESIZE = (colorImageSize :ColorImageSize[]):string[] =>{
    let sizes: string[] = []

    if(colorImageSize?.length){
        if(colorImageSize[0].colorsImages.length ){
            if(colorImageSize[0].colorsImages[0].size.length){
                colorImageSize[0].colorsImages[0].size.map(size=>{
                    sizes.push(size.size)
                })
            }
        }
    }
    return sizes 
}

export const GET_SIZES_FROM_COLORIMAGESIZES = (colorImageSize :ColorImageSizes[]):string[] =>{
    let sizes: string[] = []

    if(colorImageSize.length ){
        return colorImageSize[0].sizes
            
    }
    return [] 
}

export const FILTER_SIZE_BY_COLOR = (colorImageSize :ColorImageSizes[], color:string):string[] =>{
    if(colorImageSize?.length){
        if(colorImageSize.length ){
            let colorImage = colorImageSize.find(colorsImage=> colorsImage.color === color)
            if(colorImage){
                let sizes: string[] = []
                colorImage.sizes.map(size=>{
                    sizes.push(size)
                })
                return sizes
            }
        }
    }
    return [""]
}