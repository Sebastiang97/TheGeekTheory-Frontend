import { IS_THE_SAME_COLOR, IS_WHITE } from "@/helpers/IsWhite"

export const ColorEl = (props:any) => {
  const {children, color, currentColor, ...rest} = props

  const styleColor = (color:string)=>{
          // console.log({color, currentColor})
        return {
            backgroundColor: color,
            border: IS_WHITE(color) ? "1px solid #000" : "null",
        }
    }

  return (
    <div
        className="color"
        id={IS_THE_SAME_COLOR(currentColor, color) ? 'active' : ''}
        style={styleColor(color)}
        {...rest}
    >
    </div>
  )
}
