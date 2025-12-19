
import { useState } from "react"
import { IS_WHITE } from "@/helpers/IsWhite"
import { ColorPicker } from "../ColorPicker/ColorPicker"
import "./FormListColor.css"
interface Props {
    colors: string[]
    currentColor: string
    totalItems: number
    changeColor: (currentColor:string, listColor:string[], newColor?:string)=>void
}

export const FormListColor = ({colors, currentColor, totalItems, changeColor}:Props) => {
    const [currentC, setCurrentC] = useState(currentColor)
    // const [listColors, setListColors] = useState<string[]>(colors)
    // const [listColorsInitial, _] = useState<string[]>(colors)

    // const handleColor = (color:string) =>{
    //     if(listColorsInitial.length === listColors.length){
    //         setListColors((prev) => [...prev, color])
    //     }else{
    //         setListColors((prev) => {
    //             let lastEement = prev.length - 1
    //             prev[lastEement] = color
    //             return [...prev]
    //         })
    //     }
    //     changeProductByColor(color)
    //     setCurrentC(color)
    // }

    return (
        // <div className="listColorsAdd">
        //     {
        //         colors.map((color, i) => (
        //             <div
        //                 key={i}
        //                 onClick={() => {
        //                     changeProductByColor(color)
        //                     setCurrentC(color)
        //                 }}
        //                 className={`${currentC === color ? 'active' : 'inactive'} ${IS_WHITE(color) ? "isWhite" : ""}`}
        //                 style={{
        //                     backgroundColor: color,
        //                 }}>

        //             </div>
        //         ))
        //     }
            
        //     <ColorPicker handleColor={handleColor}/>
        // </div>
        <div className="listColorsAdd">
            {
                colors.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setCurrentC(color)
                            changeColor(color, colors)
                        }}
                        className={`${currentC === color ? 'active' : 'inactive'} ${IS_WHITE(color) ? "isWhite" : ""}`}
                        style={{
                            backgroundColor: color,
                        }}>

                    </div>
                ))
            }
            
            <ColorPicker handleColor={(c:string)=>{
                setCurrentC(c)
                changeColor(c, colors, c)
                // if(!colors.includes(c) && colors.length <= totalItems){
                // }else{
                //     setCurrentC(c)
                //     changeColor(c, colors, c)
                // }

            }}/>
        </div>
    )
}
