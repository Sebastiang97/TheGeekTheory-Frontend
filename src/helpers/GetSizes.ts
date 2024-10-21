import { SIZE } from "@/constants/Size";
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