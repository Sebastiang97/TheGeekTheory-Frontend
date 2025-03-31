import { ProductPay } from "@/Models/ProductsPay"

interface Props {
    productPay: ProductPay[]
}

export const PrintProductPayList = ({productPay}:Props) => {

    return (
        <section className="cart">
            {productPay.length
                && (
                    <>
                        {
                            productPay.map(p => (
                                <div key={p.id}>
                                    <h2>{p.name}</h2>
                                    
                                    {
                                        p.printProductPay?.length 
                                        ? (
                                            <small>Estampado</small>
                                        ) : (
                                            <small>sin estampados</small>
                                        )
                                    }

                                    {
                                        p.printProductPay?.length && (
                                            <>
                                                {
                                                    p.printProductPay.map(print=> (
                                                        <div key={print.id}>
                                                            <h3>{print.position}</h3>
                                                            <small>{print.size}</small>
                                                            <img src={print.url} alt="" />
                                                        </div>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </>
                )
            }

        </section>
    )
}
