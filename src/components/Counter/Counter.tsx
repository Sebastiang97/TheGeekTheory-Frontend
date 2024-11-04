import "./counter.css"
import { useState } from "react"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { Product } from "@/Models/Product"
import { productToProductPay } from "@/helpers/productToProductPay"
import { useCartToggleStore } from "@/libs/store/zustand/useCartToggleStore"

interface Props{ 
  initialState: number 
  product: Product,
  file?: File
}
export const Counter = ({ initialState, product, file }: Props) => {
  const [count, setCount] = useState(initialState || 0)
  const addProduct  = useCartStore(state => state.addProduct)
  const toggle = useCartToggleStore(state => state.toggle)

  const addCart =()=>{
    let productPay = productToProductPay(product)
    productPay.print = file
    addProduct(productPay, count)
    setCount(1) 
    toggle()
  }
  return (
    <>
      <div className="add">
        <button
          onClick={() => addCart()}>
          Agregar a tu carrito
        </button>
      </div>
      <div className="counter">
        <button onClick={() => { setCount((current: number) => current - 1) }}>-</button>
        <div className="display">{count}</div>
        <button onClick={() => { setCount((current: number) => current + 1) }}>+</button>
      </div>
    </>
  )
}
