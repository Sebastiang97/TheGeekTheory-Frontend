
import { useState } from "react"
import { IS_WHITE } from "@/helpers/IsWhite"
import "./ListColorPicker.css"

interface Props {
    colors: string[]
    currentColor: string
    changeColor: (s:string)=>void
}

export const ListColorPicker = ({colors, currentColor, changeColor}:Props) => {
    const [currentC, setCurrentC] = useState(currentColor)
    const [listColors, _] = useState<string[]>(colors)

    return (
        <div className="listColors">
            {
                colors.length && colors.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            changeColor(color)
                            setCurrentC(color)
                        }}
                        className={`${currentC === color ? 'active' : 'inactive'} ${IS_WHITE(color) ? "isWhite" : ""}`}
                        style={{
                            backgroundColor: color,
                        }}>

                    </div>
                ))
            }
        </div>
    )
}
