import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { useAuthenticateStore } from "@/libs/store/zustand/useAuthenticateStore"
import { ADMIN_LIST } from "@/constants/Nav.constants"
import './profile.css'

interface Props {
  showText: boolean
}
export const Profile = ({showText}:Props) => {
  const navigate = useNavigate()
  const user = useAuthenticateStore(state => state.user)
  const getUser = useAuthenticateStore(state => state.getUser)
  // const user = {picture: undefined}

  useEffect(() => {
    getUser()
    console.log(user)
  }, [])
  return (
    <>
      {user.picture ? (
        <PopoverComponent
          classNameButton="no-button profile"
          trigger={
            <div className="profile">
              <img src={user.picture} alt="" />
              {showText && "Mi Cuenta"}
            </div>
          }
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
      ) : (
        <button onClick={()=> navigate("/login")}>Mi Cuenta</button>
      )}
    </>
    
  )
}
