import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore";
import { usePayStore } from "@/libs/store/zustand/usePayStore"
import { useProductsPayStore } from "@/libs/store/zustand/useProductsPayStore";
import { ProductsPayList } from "@@/Lists/ProductsPayList/ProductsPayList";
import { PayerItem } from "@@/Payer/PayerItem";
import { Payer } from "@/Models/Payer";

export const PaymentByPayId = () => {
  const location = useLocation();
  const [payer, setPayer] = useState({} as Payer)

  const getProductsByPayId = useProductsPayStore(state => state.getProductsByPayId)
  const productsPay = useProductsPayStore(state => state.productsPay)

  const getPayById = usePayStore(state => state.getPayById)

  const getPayerById = usePayerStore(state => state.getPayerById)

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const payId = params.get('payId');
    if (payId) {
      getPayById(payId)
        .then(pay => {
          getPayerById(pay.payerId)
            .then(payer=>{
              if(payer?.id){
                setPayer(payer)
              }
            })
        })
      getProductsByPayId(payId)
    }
  }, [])
  return (
    <section className="checkout">
      <section className="infoPurshase">
        <header>
          <h2>Tus datos:</h2>
        </header>

        <PayerItem payer={payer} />
        <p>
          Vamos a trabajar con mucho amor en tu prenda durante los 
          siguientes 4-5 días hábiles. Te enviaremos un mensaje 
          apenas te enviemos tu producto.
          ¡Gracias por tu compra!
        </p>
      </section>
      <ProductsPayList productPay={productsPay} />
    </section>
  )
}