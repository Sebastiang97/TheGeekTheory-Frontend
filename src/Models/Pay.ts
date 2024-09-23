import { Payer } from "./Payer"
import { ProductPay } from "./ProductsPay"

export type Pay = {
    id: string
    paymentId:string
    description:string
    amount:number
    state:string
    payerId:string
    productsPay: ProductPay[]
    payer: Payer
}