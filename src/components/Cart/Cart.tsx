import { ShoppingCart } from "lucide-react"
import "./cart.css"
import { CartList } from "@@/Lists/CartList/CartList"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"

export const Cart = () => {
  return (
    <PopoverComponent 
      classNameButton="no-button"
      trigger={<ShoppingCart className='nav-icon'/>} 
      content={<CartList />} 
    />
  )
}