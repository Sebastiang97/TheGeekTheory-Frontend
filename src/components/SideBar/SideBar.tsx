import { NavLink } from "react-router-dom"
import { toast } from "sonner"
import { SheetComponent } from "@@/SheetComponent/SheetComponent"
import { useSideBarStore } from "@/libs/store/zustand/useSideBar"
import { NAVBAR_LIST } from "@/constants/Nav.constants"

import "./sidebar.css"

export const SideBar = () => {
  const toggle = useSideBarStore(state => state.toggle)

  return (
    <div className="container">
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
              <button
                className="mt-6"
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Show Toast
              </button>
            </ul>
          </div>
        }
      />
    </div>
  )
}
