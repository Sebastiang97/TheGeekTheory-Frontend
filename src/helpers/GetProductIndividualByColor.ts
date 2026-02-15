import { ProductIndividual } from "@/Models/ProductIndividual"

export const GET_PRODUCT_INDIVIDUAL_BY_COLOR = (products:ProductIndividual[], color:string):ProductIndividual => {
    let product = products.find(product => product.color === color)
    if(product){
        return product    
    }
    return {} as ProductIndividual
}