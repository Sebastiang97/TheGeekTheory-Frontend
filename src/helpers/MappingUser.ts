import { Payer } from "@/Models/Payer"

export const MAPPING_USER = (values: any): Payer => {
    return {
        name: values.name,
        surname: "",
        zipCode: values.zipCode || "",
        email: values.email,
        phone: values.phone,
        detailAddress: values.detail,
        address: values.address,
        city: values.city,
        idUser: values.idUser ? values.idUser : ""
    }
}