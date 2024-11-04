import { NavLink } from "react-router-dom"
import { SheetComponent } from "@@/SheetComponent/SheetComponent"
import { useSideBarStore } from "@/libs/store/zustand/useSideBar"
import { NAVBAR_LIST } from "@/constants/Nav.constants"
import "./sidebar.css"

export const SideBar = () => {
  const toggle = useSideBarStore(state => state.toggle)
  return (
    <div className="">
      <SheetComponent
        classNameContent="bg-black"
        content={
          <div className="sidebar">
            <ul>
              {
                NAVBAR_LIST.map((el, i) => (
                  <li className="menuItem" key={i}>
                    <NavLink
                      onClick={toggle}
                      to={el.to}
                    >
                      {el.text}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      />
    </div>
  )
}
