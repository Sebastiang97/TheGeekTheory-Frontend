import { useSideBarStore } from "@/libs/store/zustand/useSideBar"
// import { Menu } from "lucide-react"

export const Hamburger = () => {
  const toggle = useSideBarStore(state => state.toggle)

  return (
    // <Menu 
    //   className='nav-icon'
    //   onClick={toggle}
    // />
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className='nav-icon'
      onClick={toggle}
    >
        <path d="M4 5h16"/>
        <path d="M4 12h16"/>
        <path d="M4 19h16"/>
    </svg>
  )
}
