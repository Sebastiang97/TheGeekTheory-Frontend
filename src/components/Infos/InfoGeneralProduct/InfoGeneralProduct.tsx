import { ListColorPicker } from "@@/Lists/ListColorPicker/ListColorPicker"
import "./InfoGeneralProduct.css"

export const InfoGeneralProduct = (props:any) => {
    const {
        currency, 
        price, 
        description, 
        isVisible, 
        colors, 
        currentColor, 
        handleColors
    } = props
    
  return (
    <>
        <section className="infoGeneralProduct">
            <section>
                <span className="currency">{currency}</span>
                <span className="price">{price}</span>
            </section>
            <section>
                <p>
                    {description}
                
                </p>
            </section>
            <section>
                <h3>Visible</h3>
                <span>{isVisible ? "Si" : "No"}</span>
            </section>
            <section>
                <h3>Color</h3>
                <ListColorPicker
                    changeColor={(color:string)=> handleColors(color)}
                    colors={colors}
                    currentColor={currentColor}
                />
            </section>
        </section>
        
    </>
  )
}
