import "./purchase.css"
import { ProductPay } from "@/Models/ProductsPay"
interface Props{
    item: ProductPay
}

export const Purchase = ({item}: Props) => {
    const {urlImage, name, size, color, price} = item
    const quantity = item.quantity as any

  return (
    <>
        <article className="purchase">
            <section className="info">

                <div className="containerImg">
                    <img 
                        src={urlImage?.length ? urlImage[0]?.url : ''} 
                        alt={name} 
                    />
                </div>
                <section className="details">
                    <header>
                        <h4>{name} x {quantity}
                        </h4>
                    </header>
                    <p className="colorSize">
                        <span className="size">
                            {size}
                        </span>
                        <span 
                            className="color" 
                            style={{backgroundColor: color}}
                        >
                        </span>
                    </p>
                    <p className="content">
                        $ {price}
                    </p>
                </section>
            </section>
        </article>
    </>
  )
}
