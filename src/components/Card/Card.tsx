import { EditIcon } from "@@/icons/EditIcon"
import { useNavigate } from "react-router"

export interface Props {
    img: string
    description: string 
    title: string
    style: string
    className: string
    id:string
}

export const Card = ({id ,img, description, title, style, className}: Props) => {
  const navigate = useNavigate()
  
  return (
    <article className={className}>
      <div 
        className="update"
        onClick={() => navigate("/admin/products/actions/"+id)}
        >
        <EditIcon />
      </div>
      <div>
          <img 
              src={img} 
              alt="Product" 
          />
      </div>
      <section>
        <h4>{title}</h4>
        <small>{description}</small>
      </section>
    </article>
  )
}
