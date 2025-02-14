export type Payer = {
    id?: string,
    name: string,
    surname: string,
    email: string,
    phone: number,
    address: string,
    zipCode: string,
    city: string
    detailAddress: number,
    idUser?: string,
    payments?: any[],
}