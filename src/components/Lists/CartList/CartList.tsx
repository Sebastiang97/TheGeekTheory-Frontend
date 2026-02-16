import { CardItem } from "@@/Cards/CardItem/CardItem"
import "./cartList.css"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/constants/Nav.constants"
import { Product } from "@/Models/Product"

interface Props {
    isNotShow?: boolean    
}
export const CartList = ({isNotShow}:Props) => {

    const items = useCartStore(state => state.items)
    const [subtotal, setSubtotal] = useState(0)
    const navigate = useNavigate();

    useEffect(()=>{
        let subtotal = 0
        console.log(items) 
        items.map(i => subtotal += i.item.price * i.quantity)
        setSubtotal(subtotal)
    },[items])

    return (
        <section className="cart">
            {items.length
                ? (
                    <section className="purchases">
                        <header>
                            <h4>Carrito de compras</h4>
                        </header>
                        <section className="listPurchases">
                            {
                                items.map((i:any) => (
                                    <CardItem<Product>
                                        key={i.item.id} 
                                        item={i} 
                                        isActions={true}
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

                            {
                                !isNotShow && (
                                    <section className="actions">
                                        <button>Seguir comprando</button>
                                        <button onClick={()=> navigate(ROUTES.CHECKOUT.to)}>Terminar compra</button>
                                    </section>
                                )
                            }

                            

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
