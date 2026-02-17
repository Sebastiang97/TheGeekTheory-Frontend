import { useEffect, useState } from "react"
import { CartList } from "@@/Lists/CartList/CartList"
import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { actions, inputCheckoutFields } from "./action.constants"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { baseService } from "@/Services/base.service"
import { Payer } from "@/Models/Payer"
import "./checkout.css"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore"
import { PayerList } from "@@/Lists/PayerList/PayerList"
import { URL_PAYS } from "@/constants/service.constant"
import { PayerSelected } from "@@/PayerSelected/PayerSelected"

export const Checkout = () => {
    const items = useCartStore(state => state.items)
    const selectedPlayer = usePayerStore(state => state.selectedPlayer)
    // const createPayer = usePayerStore(state => state.createPayer)
    // const payer = usePayerStore(state => state.payer)
    // const [add, setAdd] = useState(true)
    const [isSelectPlayer, setIsSelectPlayer] = useState(false)

    const [info, setInfo] = useState<Payer>({} as Payer)

    // const getValues = (values: any, type?: string) => {
    //     if (items.length) {
    //         console.log({ values })
    //         createPayer(mappingUser(values))
    //             .then(payer => {
    //                 // setAdd(false)
    //                 setInfo(payer)
    //             }).catch(error => {
    //                 console.log(error)
    //             })
    //     }
    // }

    // const mappingUser = (values: any): Payer => {
    //     return {
    //         name: values.name,
    //         surname: "",
    //         zipCode: values.zipCode || "",
    //         email: values.email,
    //         phone: values.phone,
    //         detailAddress: values.detail,
    //         address: values.address,
    //         city: values.city
    //     }
    // }

    const getImgs = () => {

    }

    const pay = () => {
        const formData: FormData = new FormData();
        const ids:any[] = []
        const prints: any = []

        items.forEach((item) => {
            ids.push({id: item.item.id, quantity: item.quantity})
            if(item.item.print){
                prints.push({
                    idProduct: item.item.id,
                    print: item.item.print
                })
                item.item.file.forEach(file=>{
                    formData.append(`file[${item.item.id}]`, file)
                })
            }
        });
        console.log({prints,items})
        formData.append(`elements`, JSON.stringify(ids))
        formData.append(`prints`, JSON.stringify(prints))
        selectedPlayer.id && formData.append("payerId", selectedPlayer.id)

        for (const [key, value] of formData.entries()) {
            console.log(`Clave: ${key}, Valor: ${value}`);
        }
        
        baseService(URL_PAYS)
            .createFile(formData)
            .then(res => {
                console.log({ res })
                window.open(res as any, "_self")
            })
            .catch(err => {
                console.log({ err })
            })

    }

   
    return (
        <>
            <section className="checkout">
                <section className="infoPurshase">
                    <header>
                        <h2>Checkout</h2>
                        <small><span>Dirección</span> ------ Pago  </small>
                    </header>
                    <header>
                        <h4>Información de envio </h4>
                    </header>

                    <PayerSelected />
                  
                    <header className="end">
                        <h4 >Información de tu orden</h4>
                    </header>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="btn-accordion">Politica de cambio</AccordionTrigger>
                            <AccordionContent className="accordionContent">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="btn-accordion">Opciones de envio</AccordionTrigger>
                            <AccordionContent className="accordionContent">
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
                <section>
                    <CartList isNotShow={true}/>
                    {!isSelectPlayer && (
                        <button
                            onClick={() => pay()}>
                            comprar
                        </button>
                    )}
                </section>

            </section>
        </>
    )
}
