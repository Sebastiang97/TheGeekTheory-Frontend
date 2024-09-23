import { useSideBarStore } from "@/libs/store/zustand/useSideBar"
import { Menu } from "lucide-react"

export const Hamburger = () => {
  const toggle = useSideBarStore(state => state.toggle)

  return (
    <Menu 
      className='nav-icon'
      onClick={toggle}
    />
  )
}
