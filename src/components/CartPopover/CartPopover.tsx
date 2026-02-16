import "./cartPopover.css"
import { CartList } from "@@/Lists/CartList/CartList"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { useCartToggleStore } from "@/libs/store/zustand/useCartToggleStore"
import { ShoppingCartIcon } from "@@/icons/ShoppingCartIcon"

export const CartPopover = () => {
  const isOpen = useCartToggleStore(state => state.isOpen)

  return (
    <PopoverComponent 
      classNameButton="no-button"
      trigger={<ShoppingCartIcon className='nav-icon'/>} 
      content={<CartList />} 
      isOpen={isOpen}
    />
  )
}