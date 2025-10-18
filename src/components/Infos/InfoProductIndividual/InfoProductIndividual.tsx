import "./InfoProductIndividual.css"

export const InfoProductIndividual = (props: any) => {
    const { currency, price, description, isVisible } = props
    return (
        <>
            <section>
                <span className="currency">{currency}</span>
                <span className="price">{price}</span>
            </section>
            <section>
                <p>
                    {description}

                </p>
            </section>
            <section>
                <h3>Visible</h3>
                <span>{isVisible ? "Si" : "No"}</span>
            </section>
            <section>
                <h3>Color</h3>
            </section>


        </>
    )
}
