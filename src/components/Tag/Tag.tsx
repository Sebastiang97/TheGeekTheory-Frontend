import { XIcon } from "@@/icons/XIcon"
import "./Tag.css"

export const Tag = (props:any) => {
    const {children, title, onDelete, ...rest} = props
  return (
    <article 
        className="tag"
        {...rest}
    >
        <span>
            <span>
                {title}
            </span>
            <XIcon onClick={() => onDelete()}/>
        </span>
    </article>
  )
}
