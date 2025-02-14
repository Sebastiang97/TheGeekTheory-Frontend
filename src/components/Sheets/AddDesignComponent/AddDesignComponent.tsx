import { POSITION_PRINT, POSITION_SHIRT_KEY, PositionShirtPrint, PositionSP, PrintCVS } from "@/constants/PositionShirtPrint"
import { ListPosition } from "@@/Lists/ListPosition/ListPosition"
import { SheetComponent } from "@@/SheetComponent/SheetComponent"
import { ChangeEvent, useRef, useState } from "react"
import "./AddDesignComponent.css"
interface Props {
    isOpen: boolean
    toggle: ()=> void
    position: "top" | "right" | "bottom" | "left"
    handleInfo: (info:any)=>void
}
export const AddDesignComponent = ({isOpen, toggle, position, handleInfo}:Props) => {

    
    // const [cvs, setCvs] = useState<PrintCVS[]>([])
    const [url, setUrl] = useState<string>()

    const inputRef = useRef<HTMLInputElement>(null)
    
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
        
        console.log({values, cvs})
        handleInfo({
            url, 
            position: cvs
        })
        toggle()
        
    }

    const handlePic = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        setUrl(url)
    
    }

  return (
    <SheetComponent
        classNameContent="bg-black"
        content={
            <section className="addDesign">
                <h3>Añadir Diseño</h3>
                <p>Sube una imagen de alta resolución para garantizar una impresión de alta calidad. Para logotipos, el formato .png es ideal.</p>
                <hr/>
                <input
                    ref={inputRef}
                    onChange={handlePic}
                    type="file"
                    className="hidden"
                />
                <button
                    onClick={() => inputRef.current?.click()}
                >
                    Cargar Imagen
                </button>
                {url && (
                    <>
                        <img src={url} alt="" />
        
                        <ListPosition 
                            items={POSITION_PRINT} 
                            handlePosition={handlePosition}
                        />
                    </>
                )}
            </section>
        }
        isOpen={isOpen}
        toggle={toggle}
        position={position}
    />
  )
}
