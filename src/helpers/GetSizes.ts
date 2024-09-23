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