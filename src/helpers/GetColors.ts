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