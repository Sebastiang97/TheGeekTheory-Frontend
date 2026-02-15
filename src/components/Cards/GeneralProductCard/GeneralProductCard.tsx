import { useState } from "react"
import { ADMIN_MODE } from "@/constants/AdminMode.constants"
import { useNavigate } from "react-router-dom"
import { MarkImage } from "@@/ImageComponents/MarkImage/MarkImage"
import { GroupColor } from "@@/Lists/GroupColor/GroupColor"
import { AdminOptions } from "@/pages/Admin/components/AdminOptions/AdminOptions"
import { ColorImageSizes } from "@/Models/GeneralProduct"
import { FILTER_CURRENT_IMAGE_BY_COLOR, GET_CURRENT_IMAGE } from "@/helpers/GetCurrentImage"
import { FILTER_SIZE_BY_COLOR, FILTER_SIZES_BY_COLOR, GET_SIZES_FROM_COLORIMAGESIZES } from "@/helpers/GetSizes"
import { TypeActions } from "@/Models/TypeActions"

import { GET_COLORS_FROM_COLORIMAGESSIZES } from "@/helpers/GetColors"
import "./GeneralProductCard.css"

interface Props{
    id              : string
    title           : string
    subtitle        : string
    price           : number
    colorImageSizes : ColorImageSizes[]
}

export const GeneralProductCard = ({id, title, subtitle, price, colorImageSizes}:Props) => {
    
    const [currentImage, setCurrentImage] = useState<string>(colorImageSizes?.length ? colorImageSizes[0]?.image:"")
    // const [sizes, setSize] = useState<string[]>(colorImageSizes?.length ? colorImageSizes[0].sizes : [])
    const [sizes, setSizes  ] = useState<string[]>(FILTER_SIZES_BY_COLOR(colorImageSizes, colorImageSizes[0]?.color))
    const [currentColor, setCurrentColor] = useState<string>(colorImageSizes?.length ? colorImageSizes[0]?.color : "")

    const changeColor =  (color:string)=>{
        setCurrentColor(color)
        setSizes(FILTER_SIZES_BY_COLOR(colorImageSizes, color))
        setCurrentImage(FILTER_CURRENT_IMAGE_BY_COLOR(colorImageSizes, color))
    }
    
    const navigate = useNavigate()
    const handleOptions = (type: TypeActions, id: string): void => {
        console.log(type)
        if (type === ADMIN_MODE.view) {
            navigate("/generalProduct/"+id)
        }
    }

    return (
        <section className="cardGeneral">
            <article>
                <MarkImage url={currentImage} alt="alt image"/>
                <div className="containerCard">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                    <div className="price">${price}</div>
                    <div className="containerSizeColor">
                        <div className="containerSize">
                            {
                                sizes.length && sizes.map(s=>(
                                    <span key={s}>{s}</span>
                                ))
                            }
                        </div>
                        <GroupColor 
                            changeColor={changeColor}
                            currentColor={currentColor}
                            colors={GET_COLORS_FROM_COLORIMAGESSIZES(colorImageSizes)}
                        />

                    </div>
                    <div className="containerButtons">
                        <button onClick={()=>handleOptions("view", id)}>Escoge la tuya</button>
                    </div>
                </div>


            </article>
            
        </section>
    )
}
