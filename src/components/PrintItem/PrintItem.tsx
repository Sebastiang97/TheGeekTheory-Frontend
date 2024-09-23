import { URLImage } from "@/Models/URLImage"
import "./print.css"
interface Props {
    urlImage:URLImage[]
    name:string
    author:string
    handleSelected: (url:string)=> void
    isShow: boolean
}
export const PrintItem = ({urlImage,name, author, handleSelected, isShow}:Props) => {
    const url = urlImage.find(url=> url.isMain)?.url || ""
    return (
        <article className="print">
            <div className="printImage">
                <img
                    src={url}
                    alt={name}
                />
            </div>
            <section>
                <h3>{name}</h3>
                <h4>{author}</h4>
                <div className="actions">
                    {isShow && (
                        <button 
                            onClick={()=> handleSelected(url)}
                        >
                            escoger
                        </button>
                    )}
                </div>
            </section>
        </article>
    )
}
