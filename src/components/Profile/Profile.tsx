import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { useAuthenticateStore } from "@/libs/store/zustand/useAuthenticateStore"
import { ADMIN_LIST } from "@/constants/Nav.constants"
import './profile.css'

interface Props {
  showText: boolean
}
export const Profile = ({showText}:Props) => {
  // const user = useAuthenticateStore(state => state.user)
  // const getUser = useAuthenticateStore(state => state.getUser)
  const user = {picture: undefined}

  // useEffect(() => {
  //   getUser()
  // }, [])
  return (
    <PopoverComponent
      classNameButton="no-button"
      trigger={
        user.picture
        ? (
          <li className="menuItem">
            <div className="profile">
              <img src={user.picture} alt="" />
            </div>
            {showText && "Mi Cuenta"}
          </li>
        )
        : (
          <li className="menuItem">
            <div className="profile">
              <img src={"	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s"} alt="" />
            </div>
            {showText && "Mi Cuenta"}
          </li>
        )}
      content={
        <ul>
          {
            ADMIN_LIST.map((el, i) => (
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
