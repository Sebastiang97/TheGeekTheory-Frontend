import "./summaryPay.css"
interface Props {
    discount: number
    subTotal: number
    sendTo: number
    taxes: number
    total: number
}
export const SummaryPay = ({subTotal,discount,sendTo,taxes,total}:Props) => {
    return (
        <>
            <section className="item">
                <p className="content">
                    Descuento
                </p>
                <p className="price">
                    ${discount}
                </p>
            </section>
            <section className="item">
                <p className="content">
                    Subtotal
                </p>
                <p className="price">
                    ${subTotal}
                </p>
            </section>
            <section className="item">
                <p className="content">
                    Envio
                </p>
                <p className="price">
                    ${sendTo}
                </p>
            </section>
            <section className="item">
                <p className="content">
                    Impuestos
                </p>
                <p className="price">
                    ${taxes}
                </p>
            </section>
            <hr />
            <section className="item">
                <p className="content">
                    Total
                </p>
                <p className="price">
                    ${total}
                </p>
            </section>
        </>
    )
}
