import { useState } from "react"
import "./GroupColor.css"
import { IS_WHITE } from "@/helpers/IsWhite"
import { ColorEl } from "./ColorEl/ColorEl"

// const COLORS = ["#FE5C00", "#FFFFFF", "#FFAF52", "#247C07"]

export const GroupColor = (props:any) => {
    const {colors, changeColor, currentColor,...rest} = props
    // const [colors, _] = useState(COLORS)
    const [colorsHex, _] = useState(colors)
    // const [currentColor, setCurrentColor] = useState(colors[0])

    // const styleColor = (color:string)=>{
    //     // console.log({color, currentColor})
    //     return {
    //         backgroundColor: color,
    //         border: IS_WHITE(color) ? "1px solid #000" : "null",
    //     }
    // }
  return (
    <div 
        className="containerColor"
        {...rest}
        >
        {
            colorsHex.length && colorsHex.map((color:string, i:number)=> (
                // <div
                //     key={color}
                //     className="color"
                //     id={currentColor === color ? 'active' : ''}
                //     style={styleColor(color)}
                //     onClick={()=>{
                //         // setCurrentColor(color)
                //         changeColor(color)
                //     }}
                // >
                    
                // </div>
                <ColorEl
                    key={i}
                    color={color}
                    currentColor={currentColor}
                    onClick={()=>{
                        changeColor(color)
                    }}
                />
            ))
        }
        
    </div>
  )
}
