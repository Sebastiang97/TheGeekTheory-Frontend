import { NAVBAR_LIST } from "@/constants/Nav.constants"
import { CartPopover } from "@@/CartPopover/CartPopover"
import { Hamburger } from "@@/icons/Hamburger"
import { Language } from "@@/icons/Language/Language"
import { NavLink } from "react-router-dom"
import { IMAGES } from "@/constants/images/images"
import "./navbar.css"
import { Profile } from "@@/Profile/Profile"
import { UnknownComponent } from "@@/UnknownComponent/UnknownComponent"

export const NavbarComponent: React.FC = () => {

  return (
    <nav>
      <div className="hamburger">
        <Hamburger />
      </div>
      <div className="logo">
        <img src={IMAGES.logoBlack} alt="" />
      </div>
      <section className="links">
        {
          NAVBAR_LIST.map((nav, i) => (
            <NavLink key={i} to={nav.to}>
              {nav.text}
            </NavLink>
          ))
        }
        <Language />
        {/* {
          user.picture
            ? (
              <div className="profile">
                <img src={user.picture} alt="" />
              </div>
            )
            : (
              <button >
                Sign In
              </button>
            )
        } */}
        {/* <Profile showText={false}/> */}
        <UnknownComponent />
      </section>
      <div className="icon">
        <CartPopover />
      </div>
    </nav>
  )
}

