
import { EditIcon } from "@@/icons/EditIcon"
import { DeleteIcon } from "@@/icons/DeleteIcon"
import "./cardItem.css"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { itemCard } from "@/Models/itemCart"
interface Props<T>{
    item: itemCard<T>
}

export const CardItem = <T,>({item}: Props<T>) => {
    const {id, urlImage, name, size, color, price} = item.item as any
    const quantity = item.quantity as any
    const deleteProduct = useCartStore(state => state.deleteProduct)
    // const [count, setCount] = useState(quantity || 0)

    const editCardItem = (id:string) =>{
    }

    const deleteCardItem = (id:string) =>{
        deleteProduct(id)     
    }
  return (
    <>
        <article className="purchase">
            <section className="info">

                <div className="containerImg">
                    <img 
                        src={urlImage.length ? urlImage[0]?.url : ''} 
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
            <section className="actions">
                <EditIcon 
                    onClick={() => editCardItem(id)}
                    width="18"
                    height="18"

                />
                <DeleteIcon 
                    onClick={() => deleteCardItem(id)}
                    width="18"
                    height="18"
                />
            </section>
        </article>
    </>
  )
}
