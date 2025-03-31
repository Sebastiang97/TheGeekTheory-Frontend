import { POSITION_PRINT, POSITION_SHIRT_KEY, PositionShirtPrint, PositionSP, PrintCVS } from "@/constants/PositionShirtPrint"
import { ListPosition } from "@@/Lists/ListPosition/ListPosition"
import { SheetComponent } from "@@/SheetComponent/SheetComponent"
import { ChangeEvent } from "react"
import "./AddDesignSheetComponent.css"
interface Props {
    isOpen: boolean
    toggle: ()=> void
    position: "top" | "right" | "bottom" | "left"
    handleInfo: (info:any)=>void
}
export const AddDesignSheetComponent = ({isOpen, toggle, position, handleInfo}:Props) => {
    
    const handlePosition = (values: any) =>{
        const cvs = []
        if(values.checkboxFront){
            cvs.push({
                type: POSITION_SHIRT_KEY.FRONT,
                position: values.selectOpFront
            })
        }
        
        if(values.checkboxBack){
            cvs.push({
                type: POSITION_SHIRT_KEY.BACK, 
                position: values.selectOpBack
            })
        }
        
        handleInfo({
            front:{
                url: values.imgFront,
                check: values.checkboxFront,
                position: values.selectOpFront
            }, 
            back:{
                url: values.imgBack,
                check: values.checkboxBack,
                position: values.selectOpBack
            }, 
            // both:{
            //     url: values.imgBoth,
            //     check: values.checkboxBoth,
            //     position: values.selectOpBoth
            // }, 
            position: cvs
        })
        toggle()
        
    }

  return (
    <SheetComponent
        classNameContent="bg-black"
        content={
            <section className="addDesign">
                <h3>Añadir Diseño</h3>
                <p>Sube una imagen de alta resolución para garantizar una impresión de alta calidad. Para logotipos, el formato .png es ideal.</p>
                <hr/>
    
                <ListPosition 
                    items={POSITION_PRINT} 
                    handlePosition={handlePosition}
                />
            </section>
        }
        isOpen={isOpen}
        toggle={toggle}
        position={position}
    />
  )
}
