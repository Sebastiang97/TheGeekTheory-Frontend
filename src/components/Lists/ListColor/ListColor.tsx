
import { useState } from "react"
import "./ListColor.css"
import { IS_WHITE } from "@/helpers/IsWhite"
interface Props {
    colors: string[]
    currentColor: string
    changeProductByColor: (s:string)=>void 
}

export const ListColor = ({colors, currentColor, changeProductByColor}:Props) => {
    const [currentC, setCurrentC] = useState(currentColor)

   
    return (
        <div className="listColors">
            {
                colors.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            changeProductByColor(color)
                            setCurrentC(color)
                        }}
                        className={currentColor === color ? 'active' : 'inactive'}
                        style={{
                            backgroundColor: color,
                            border: IS_WHITE(color) ? "1px solid #000" : "null",
                        }}>

                    </div>
                ))
            }
        </div>
    )
}
