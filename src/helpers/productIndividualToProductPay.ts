import { ProductIndividual } from "@/Models/ProductIndividual";
import { ProductPay } from "@/Models/ProductsPay";

export const PRODUCTINDIVIDUAL_TO_PRODUCTPAY = (product: ProductIndividual, price:number):ProductPay =>{

    return {
        id:            product.id,
        name:          product.title,
        description:   product.description,
        price:         price,
        size:          product.size,
        color:         product.color,
        quantity:      product.quantity,
        urlImage:      product.urlImage
        
    } as ProductPay

}