import { PopoverComponent } from "@@/PopoverComponent/PopoverComponent"
import { FILTER_SIZES } from "@/constants/Size"

import "./FormListSize.css"
import { useState } from "react"
interface Props {
    sizes: string[]
    currentSize: string
    totalItems: number
    changeSize: (currentSize:string, listSizes:string[], newSize?:string)=>void 
}

export const FormListSize = ({sizes, currentSize, totalItems, changeSize}:Props) => {
    const [currentS, setCurrenS] = useState(currentSize)
    // const [listSizes, setlistSizes] = useState<string[]>(sizes)
    // const [listSizesInitial, _] = useState<string[]>(sizes)

    // const handleSize = (size:string) =>{
    //     if(listSizesInitial.length === listSizes.length){
    //         setlistSizes((prev) => [...prev, size])
    //     }else{
    //         setlistSizes((prev) => {
    //             let lastEement = prev.length - 1
    //             prev[lastEement] = size
    //             return [...prev]
    //         })
    //     }
    //     changeProductBySize(size, listSizes)
    // }

    // useEffect(()=>{
    //     console.log({sizes})
    //     changeProductBySize(currentSize, sizes)
    // },[currentSize])

    

    return (
        <div className="FormListSize">
            {/* {
                listSizes && listSizes.map((size,i) => (
                    <button
                        key={i}
                        type="button"
                        className={size === currentSize ? "" : "secondary"}
                        onClick={() => changeProductBySize(currentSize, listSizes)}
                    >
                        {size}
                    </button>
                ))
            } */}
            {
                sizes && sizes.map((size,i) => (
                    <button
                        key={i}
                        type="button"
                        className={size === currentS ? "" : "secondary"}
                        onClick={() => {
                            setCurrenS(size)
                            changeSize(size, sizes)
                        }}
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
                                    onClick={()=> {
                                        setCurrenS(el)
                                        changeSize(el, sizes, el)
                                    }}
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
