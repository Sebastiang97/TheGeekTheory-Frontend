import { XIcon } from "@@/icons/XIcon"
import "./Tag.css"

export const Tag = (props:any) => {
    const {children, title, onDelete , xIcon = false, ...rest} = props
  return (
    <article 
        className="tag"
        {...rest}
    >
        <span>
            <span>
                {title}
            </span>
            { xIcon &&  <XIcon onClick={() => onDelete()}/> }
        </span>
    </article>
  )
}
