import { NavLink } from "react-router-dom"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import {  UNKNOWN_SESION } from "@/constants/Nav.constants"
import './UnknownComponent.css'
import { ProfileIcon } from "@@/icons/ProfileIcon"

export const UnknownComponent = () => {
  return (
    <PopoverComponent
      classNameButton=""
      trigger={
        <ProfileIcon/>
      }
      content={
        <ul>
          {
            UNKNOWN_SESION.map((el, i) => (
              <li className="menuItem" key={i}>
                <NavLink
                  to={el.to}
                >
                  {el.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      }
    />
  )
}
