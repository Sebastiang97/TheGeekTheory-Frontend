
import { useState } from "react"
import { IS_WHITE } from "@/helpers/IsWhite"
import { ColorPicker } from "../ColorPicker/ColorPicker"
import "./FormListColor.css"
interface Props {
    colors: string[]
    currentColor: string
    changeProductByColor: (s:string)=>void
}

export const FormListColor = ({colors, currentColor, changeProductByColor}:Props) => {
    const [currentC, setCurrentC] = useState(currentColor)
    const [listColors, setListColors] = useState<string[]>(colors)
    const [listColorsInitial, _] = useState<string[]>(colors)

    const handleColor = (color:string) =>{
        if(listColorsInitial.length === listColors.length){
            setListColors((prev) => [...prev, color])
        }else{
            setListColors((prev) => {
                let lastEement = prev.length - 1
                prev[lastEement] = color
                return [...prev]
            })
        }
        changeProductByColor(color)
        setCurrentC(color)
    }

    return (
        <div className="listColorsAdd">
            {
                listColors.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            changeProductByColor(color)
                            setCurrentC(color)
                        }}
                        className={`${currentC === color ? 'active' : 'inactive'} ${IS_WHITE(color) ? "isWhite" : ""}`}
                        style={{
                            backgroundColor: color,
                        }}>

                    </div>
                ))
            }
            
            <ColorPicker handleColor={handleColor}/>
        </div>
    )
}
