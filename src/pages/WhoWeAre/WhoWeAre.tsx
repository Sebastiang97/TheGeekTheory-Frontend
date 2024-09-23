import { IMAGES } from "@/constants/images/images"
import "./whoWeAre.css"

export const WhoWeAre = () => {
    return (
        <section className="whoWeAre">
            <section className="cardWho">
                <div className="containerImg">
                    <img src={IMAGES.whoWeAreMain} alt="" />
                </div>
                <section className="description">
                    <header>
                        <h1>
                            ¡Somos The Geek Theory!
                        </h1>
                    </header>
                    <p className="content">
                        Y tenemos una teoría:Nunca eres demasiado Geek.
                    </p>
                    <p className="content">
                        Crea tu estilo con todas los diseños pensados verdaderamente para ti.
                    </p>
                    <p className="content">
                        ¿No te gustó ninguno? ¡Envíanos el tuyo
                        y lo estampamos!
                    </p>

                    <p className="actions">
                        <button>¡Empieza aqui!</button>
                    </p>
                </section>
            </section>

            <section className="process">
                <p className="content">
                    Nuestro proceso es muy sencillo y te permite tener tus prendas ¡100% personalizadas!
                </p>
                <section className="steps">
                    <article className="step">
                        <div className="containerImg">
                            <img src={IMAGES.number1} alt="" />
                        </div>
                        <div className="title">
                            Escoge tu diseño
                        </div>
                    </article>

                    <div className="description">
                        Tú nos dices qué diseño quieres. Tenemos toda una colección
                        variada que seguro te sorprendera. Aún así, si tienes un
                        diseño y te gustaría tenerlo en tus prendas, subelo en
                        nuestra página y nosotros te la estampamos.
                    </div>

                    <article className="step">
                        <div className="containerImg">
                            <img src={IMAGES.number2} alt="" />
                        </div>
                        <div className="title">
                            Escoge tu prenda
                        </div>
                    </article>
                    <div className="description">
                        Tenemos Ropa interior, T-shirts y crop tops. ¿Sobre cuál quieres tu diseño?
                    </div>
                    <div className="description">
                        Tenemos Ropa interior, T-shirts y crop tops. ¿Sobre cuál quieres tu diseño?
                        Antes de terminar tu compra, vas a poder ver un previsualización de tu prenda
                        con el diseño encima. Si te encanta, ¡sigue al siguiente paso!
                    </div>

                    <article className="step">
                        <div className="containerImg">
                            <img src={IMAGES.number3} alt="" />
                        </div>
                        <div className="title">
                            Escoge tu prenda
                        </div>
                    </article>
                    <div className="description">
                        Después de confirmar tu diseño y tu prenda, estás listo para terminar tu pedido.
                        Tenemos diversos medios de pago.
                    </div>
                    <div className="description">
                        Una vez confirmado tu pago, tu prenda será despachada entre 3-5 días hábiles a tu dirección.
                    </div>
                    <div className="description">
                        Si tienes alguna pregunta, siempre nos puedes contactar ¡y estaremos felices de atenderte!
                    </div>
                </section>
            </section>

            <section className="found">
                <header>
                    <h3>
                        Encuéntranos en
                    </h3>
                </header>

                <section className="socials">
                    <div className="container">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
                        </a>
                    </div>
                </section>

                <section className="contact">
                    <div className="content">
                        ¡Conoce nuestros diseños antes que todos!
                    </div>
                    <form>
                        <div className="field">
                            <input type="text" placeholder="Nombre@ejemplo.com" />
                        </div>
                        <div className="actions">
                            <button>Enviar</button>
                        </div>
                    </form>
                </section>
            </section>



        </section>
    )
}
