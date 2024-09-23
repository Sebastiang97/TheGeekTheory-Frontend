import { DesignList } from "@@/DesignList/DesignList"
import "./design.css"
export const Design = () => {
  return (
    <>
      <section className="selectDesign">
        <header>
          <h1>
            Escoge tu diseño
          </h1>
        </header>
        <DesignList/>
      </section>

      <section className="selectDesign">
        <header>
          <h4>
            ¿No te gusta ninguno? ¡Sube el tuyo! Nosotros lo estampamos
          </h4>
        </header>
      </section>

      <section className="uploadDesign">
        <section className="cardUpload">
          <header>
            <h4>
              ¡Arrastra y suelta tu diseño aquí!
            </h4>
          </header>
          <section className="upload">
            <div className="cardUpload">
              <p className="content">+</p>
            </div>
          </section>
        </section>
        <p className="content">
          Tu diseño debe estar en formato .svg, .psd o .ai. Conoce nuestros T&C
        </p>
      </section>
    </>
  )
}
