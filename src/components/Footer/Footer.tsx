import { NAVBAR_LIST } from '@/constants/Nav.constants'
import './footer.css'
import { Link } from 'react-router-dom'
import { IMAGES } from '@/constants/images/images'
import { Facebook } from '@@/icons/Facebook'
import { Tiktok } from '@@/icons/Tiktok'
import { Instagram } from '@@/icons/Instragram'
import { WhatsApp } from '@@/icons/WhatsApp'

export const Footer = () => {
  return (
    <footer>
        <section className="containerImg">
            <img src={IMAGES.footer1} alt="" />
        </section>
        <section className="navBarList">
            <div>
                {
                    NAVBAR_LIST.map((el,i)=>(
                        <Link 
                            to={el.to} 
                            key={i}
                            >
                            {el.text}
                        </Link>
                    ))
                }
            </div>
        </section>

        <section className="contact">
            <p className="content">
                Contáctanos
            </p>
            <section className="icons">
                {/* <div className="containerImg">
                </div> */}
                <div className="socials">
                    <WhatsApp />
                    <Instagram />
                    <Facebook />
                    <Tiktok />
                </div>
            </section>
            <p className="content">
                Hecho en Colombia
            </p>
        </section>

    </footer>
  )
}
