import { usePayStore } from "@/libs/store/zustand/usePayStore"
import { Pay } from "@/Models/Pay"
import { useEffect, useState } from "react"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore"
import { Pagination } from "@@/Pagination/Pagination"
import { LIMIT_MY_PAYS } from "@/constants/Paginate"
import { CardItem } from "@@/Cards/CardItem/CardItem"
import { ProductPay } from "@/Models/ProductsPay"
import { SummaryPay } from "@@/SummaryPay/SummaryPay"
import "./payments.css"
import { GET_FORMAT_DATE_PAY } from "@/helpers/GetFormatDatePay"
import { DirectionPage } from "@/Models/DirectionPage"

export const Payments = () => {
  const [pays, setPays] = useState<Pay[]>([])
  const [previousCursor, setPreviousCursor] = useState("")
  const [nextCursor, setNextCursor] = useState("")
  const payer = usePayerStore(state => state.payer)


  const getPayByPayerId = usePayStore(state => state.getPayByPayerId)

  const handlePaginate = (direction:DirectionPage) => {
    if (payer.length && payer[0].id) {
      getPayByPayerId(payer[0].id,direction === "next" ? nextCursor : previousCursor , LIMIT_MY_PAYS, direction)
        .then(pays => {
          setPays(pays.content)
        })
    }

  }

  useEffect(() => {
    if (payer.length && payer[0].id) {
      getPayByPayerId(payer[0].id, "", LIMIT_MY_PAYS, "next")
        .then(pays => {
          setPays(pays.content)
        })
    }
  }, [])

  return (
    <section className="container">
      <h2 className="datePay">Tus compras </h2>
      <section className="myPayments">
        {pays?.length ? (
          pays.map(pay => {
            return (
              <div key={pay.id}>
                <h4 className="datePay">{GET_FORMAT_DATE_PAY(pay.creationDate)}</h4>
                {
                  pay.productsPay.map(productPay => {
                    return (
                      <CardItem<ProductPay>
                        key={productPay.id}
                        item={{
                          item: productPay,
                          quantity: productPay.quantity
                        }}
                        isActions={false}
                      />
                    )
                  })
                }
                <section className="summary">
                  <SummaryPay
                    discount={0}
                    sendTo={0}
                    subTotal={pay.amount}
                    taxes={0}
                    total={pay.amount}
                  />
                </section>
              </div>
            )
          }
          )
        ) : (
          <div>Sin pagos </div>
        )}
      </section>
      <Pagination handlePagination={handlePaginate} />
    </section>
  )
}


/*

 <section className="container">
      {pays?.length ? (
        pays.map(pay => {
          if(pay.productsPay.length){
            let subtotal = 0
            pay.productsPay.map(i => subtotal += i.price * i.quantity)
            pay.productsPay.forEach(productPay=>{
              return (
                <CardItem<ProductPay>
                  key={productPay.id} 
                  item={{
                    item: productPay,
                    quantity: productPay.quantity
                  }} 
                />
                )
            })
          }else{
            return (
              <div>sin productos</div>
            )
          }
          
        })
      ):(
        <div>Sin pagos </div>
      )}
      <Pagination handlePagination={handlePaginate} />

    </section>
*/