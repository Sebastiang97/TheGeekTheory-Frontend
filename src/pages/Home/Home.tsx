import { DesignList } from "@@/DesignList/DesignList"
import "./home.css"
export const Home = () => {
  return (
    <section className="home">
      <article className="main" >
        <header>
          <h1>
            No uses el estilo de otros <br /> ¡Crea el tuyo!
          </h1>
          <div className="actions">
            <button>¡Empieza ya!</button>
          </div>
        </header>
        <div className="containerImg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s" alt="" />
        </div>
      </article>

      <section className="custom">
        <header>
          <h3>
            ¡Personaliza tus prendas en 3 pasos!
          </h3>
        </header>
        <section className="steps">
          <article className="step">
            <div>
              <div className="containerImg">
                <img src="https://i.pinimg.com/550x/61/e9/49/61e94953005f1e0b6c91c2acc624fc0d.jpg" alt="" />
              </div>
              <p className="content">Escoge tu diseño</p>
            </div>
          </article>
          <article className="step">
            <div>
              <div className="containerImg">
                <img src="https://i.pinimg.com/550x/61/e9/49/61e94953005f1e0b6c91c2acc624fc0d.jpg" alt="" />
              </div>
              <p className="content">Elige tu prenda</p>
            </div>
          </article>
          <article className="step">
            <div>
              <div className="containerImg">
                <img src="https://i.pinimg.com/550x/61/e9/49/61e94953005f1e0b6c91c2acc624fc0d.jpg" alt="" />
              </div>
              <p className="content">¡Pide tu prenda y crea tu estilo!</p>
            </div>
          </article>
        </section>
      </section>

      <section className="ownDesign">
        <header>
          <h1>
            ¡Nuestros nuevos diseños!
          </h1>
        </header>
        {/* <section className="designlist">
          {
            Array.from({ length: 6 }, (_, i) => (
              <article className="design" key={i}>
                <div className="containerImg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s" alt="" />
                </div>
              </article>
            ))
          }
        </section> */}

        <DesignList />
      </section>


      <section className="contact">
        <div className="content">
          ¡Conoce nuestros diseños antes que todos!
        </div>
        <form>
          <div className="field">
            <input type="text" placeholder="Nombre@ejemplo.com"/>
          </div>
          <div className="actions">
            <button>Enviar</button>
          </div>
        </form>
      </section>
    </section>
  )
}
