import { Print } from "./Print"

export type ProductPay = {
    id: string,
    name: string,
    description:string,
    price: number,
    size: string,
    color: string,
    quantity: number,
    payId?: string,
    urlImage?: any[],
    print?: Print[],
    file: File[]
    printProductPay?: Print[]
}