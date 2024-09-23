import "./designList.css"
export const DesignList = () => {
  return (
    <section className="designlist">
          {
            Array.from({ length: 6 }, (_, i) => (
              <article className="design" key={i}>
                <div className="containerImg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s" alt="" />
                </div>
              </article>
            ))
          }
    </section>
  )
}
