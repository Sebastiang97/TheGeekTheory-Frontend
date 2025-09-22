import { useState } from "react"
import "./GroupColor.css"

const COLORS = ["#FE5C00", "#FFFFFF", "#FFAF52", "#247C07"]

export const GroupColor = (props:any) => {
    const {...rest} = props
    const [colors, _] = useState(COLORS)
    const [currentColor, setCurrentColor] = useState(COLORS[0])

    const styleColor = (color:string)=>{
        // console.log({color, currentColor})
        return {
            backgroundColor: color,
            border: color === "#FFFFFF" ? "1px solid #000" : "null",
            outline: color === currentColor ? "2px solid #FE5C00" : "null"
        }
    }
  return (
    <div 
        className="containerColor"
        {...rest}
        >
        {
            colors.length && colors.map((color:string)=> (
                <>
                    <div
                        key={color}
                        className="color"
                        style={styleColor(color)}
                        onClick={()=>setCurrentColor(color)}
                    ></div>
                </>
            ))
        }
        
    </div>
  )
}
