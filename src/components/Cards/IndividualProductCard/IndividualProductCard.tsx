
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { useNavigate } from "react-router-dom"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { ColorImageSizes } from "@/Models/GeneralProduct"
import { TypeActions } from "@/Models/TypeActions"
import { ColorEl } from "@@/Lists/GroupColor/ColorEl/ColorEl"
import "./IndividualProductCard.css"

interface Props{
    id              : string
    title           : string
    subtitle        : string
    price           : number
    img             : string
    size            : string
    color           : string
}

export const IndividualProductCard = ({id, title, subtitle, price, img, color, size}:Props) => {
    const navigate = useNavigate()
    const handleOptions = (type: TypeActions, id: string): void => {
        console.log(type)
        if (type === ADMIN_MODE.add) {
            navigate("/generalProduct/"+id)
        }
    }

    return (
        <section className="individualProductCardGeneral">
            <article>
                <MarkImage url={img} alt="alt image"/>
                <div className="containerCard">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                    <div className="price">${price}</div>
                    <div className="containerSizeColor">
                        <div className="containerSize">
                            {size}
                        </div>
                        <div className="containerColor" >
                            <ColorEl 
                                color={color}
                                currentColor={""}
                            />
                        </div>
                    </div>
                    <div className="containerButtons">
                        <button onClick={()=>handleOptions("add", id)}>Escoge la tuya</button>
                    </div>
                </div>


            </article>
            
        </section>
    )
}
