import "./preview.css"

export const Preview = () => {
  return (
    <>
        {/* <section className="productTitle">
            <header>
                <h1>
                    Preview
                </h1>
            </header>
        </section> */}
        <section className="product">
            <article>
                <header>
                    <h1>
                        Preview
                    </h1>
                </header>
                <div className="containerImg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s" alt="" />
                </div>
                <p className="content">
                ¡Esta será tu prenda! Revisala bien, ya que este será el diseño que estamparemos con amor para ti!
                </p>
            </article>
        </section>

        {/* <section className="description">
            <p className="content">
            ¡Esta será tu prenda! Revisala bien, ya que este será el diseño que estamparemos con amor para ti!
            </p>
        </section> */}
    </>
  )
}
