import "./productsPayList.css"
import { useEffect, useState } from "react"
import { ProductPay } from "@/Models/ProductsPay"
import { Purchase } from "@@/Purchase/Purchase"

interface Props {
    productPay: ProductPay[]
}

export const ProductsPayList = ({productPay}:Props) => {

    const [subtotal, setSubtotal] = useState(0)

    useEffect(()=>{
        let subtotal = 0
        productPay.map(p => subtotal += p.price * p.quantity)
        setSubtotal(subtotal)
    },[])

    return (
        <section className="cart">
            {productPay.length
                ? (
                    <section className="purchases">
                        <header>
                            <h3>Tus compras</h3>
                        </header>
                        <section className="listPurchases">
                            {
                                productPay.map(p => (
                                    <Purchase
                                        key={p.id} 
                                        item={p} 
                                    />
                                ))
                            }
                        </section>

                        <section className="summary">
                            <section className="item">
                                <p className="content">
                                    Descuento
                                </p>
                                <p className="price">
                                    $00.000
                                </p>
                            </section>
                            <section className="item">
                                <p className="content">
                                    Subtotal
                                </p>
                                <p className="price">
                                    ${subtotal}
                                </p>
                            </section>
                            <section className="item">
                                <p className="content">
                                    Envio
                                </p>
                                <p className="price">
                                    $16.700
                                </p>
                            </section>
                            <section className="item">
                                <p className="content">
                                    Impuestos
                                </p>
                                <p className="price">
                                    $00.000
                                </p>
                            </section>
                            <hr />
                            <section className="item">
                                <p className="content">
                                    Total
                                </p>
                                <p className="price">
                                    $61.700
                                </p>
                            </section>
                        </section>
                    </section>
                )
                : (
                    <section className="noProducts">
                        No tienes productos en el carrito agrega uno
                    </section>
                )
            }

        </section>
    )
}
