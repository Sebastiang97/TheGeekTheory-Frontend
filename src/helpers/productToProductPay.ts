import { Product } from "@/Models/Product";
import { ProductPay } from "@/Models/ProductsPay";

export const productToProductPay = (product: Product):ProductPay =>{

    return {
        id:            product.id,
        name:          product.name,
        description:   product.description,
        price:         product.price,
        size:          product.size,
        color:         product.color,
        quantity:      product.quantity
        // urlImage:      product.urlImage,
        
    } as ProductPay

}