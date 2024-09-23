import "./ListSize.css"
interface Props {
    sizes: string[]
    currentSize: string
    changeProductBySize: (s:string)=>void 
}

export const ListSize = ({sizes, currentSize, changeProductBySize}:Props) => {
    return (
        <div className="listSize">
            {
                sizes.map((size,i) => (
                    <button
                        key={i}
                        className={size === currentSize ? "" : "secondary"}
                        onClick={() => changeProductBySize(size)}
                    >
                        {size}
                    </button>
                ))
            }
        </div>
    )
}
