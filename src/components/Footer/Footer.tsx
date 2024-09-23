import { NAVBAR_LIST } from '@/constants/Nav.constants'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <section className="containerImg">
            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
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
                <div className="containerImg">
                    <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                </div>
                <div className="socials">
                    <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                    <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                    <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                </div>
            </section>
            <p className="content">
                Hecho en Colombia
            </p>
        </section>

    </footer>
  )
}
