import { useState } from "react"
import "./FormListSize.css"
import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { FILTER_SIZES } from "@/constants/Size"
interface Props {
    sizes: string[]
    currentSize: string
    changeProductBySize: (s:string)=>void 
}

export const FormListSize = ({sizes, currentSize, changeProductBySize}:Props) => {
    const [currentS, __] = useState(currentSize)
    const [listSizes, setlistSizes] = useState<string[]>(sizes)
    const [listSizesInitial, _] = useState<string[]>(sizes)

    const handleSize = (size:string) =>{
        if(listSizesInitial.length === listSizes.length){
            setlistSizes((prev) => [...prev, size])
        }else{
            setlistSizes((prev) => {
                let lastEement = prev.length - 1
                prev[lastEement] = size
                return [...prev]
            })
        }
        changeProductBySize(size)
    }

    return (
        <div className="FormListSize">
            {
                listSizes && listSizes.map((size,i) => (
                    <button
                        key={i}
                        type="button"
                        className={size === currentSize ? "" : "secondary"}
                        onClick={() => changeProductBySize(size)}
                    >
                        {size}
                    </button>
                ))
            }
            <PopoverComponent 
            
                classNameButton=""
                trigger={
                    <>
                        +
                    </>
                }
                content={
                    <>
                        {
                            FILTER_SIZES(sizes).map(el=> (
                                <button
                                    key={el}
                                    type="button"
                                    onClick={()=>handleSize(el)}
                                >
                                    {el}
                                </button>
                            ))
                        }
                       
                    </>
                }
            />
            
        </div>
    )
}
