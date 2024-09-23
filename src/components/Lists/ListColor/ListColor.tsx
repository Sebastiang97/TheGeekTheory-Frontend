import "./ListColor.css"
interface Props {
    colors: string[]
    currentColor: string
    changeProductByColor: (s:string)=>void 
}

export const ListColor = ({colors, currentColor, changeProductByColor}:Props) => {
    return (
        <div className="listColors">
            {
                colors.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => changeProductByColor(color)}
                        className={currentColor === color ? 'active' : 'inactive'}
                        style={{
                            backgroundColor: color,
                            border: color === "#fff" && currentColor !== "#fff"
                                ? '1px solid #000'
                                : ""
                        }}>

                    </div>
                ))
            }
        </div>
    )
}
