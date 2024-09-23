import { Card } from "@@/Card/Card"

export interface Props {
    elements: any[]
    children?: React.ReactElement | React.ReactElement[]
    className?: string
    style?: React.CSSProperties 
    typeCard: "product" | "print" | "category"
}

export const CategoryList = ({elements, className, style, typeCard}: Props) => {
  return (
    <section className={className} style={style}>
        {
            elements.length &&(
                <>
                    {
                        elements?.map(element=>{
                           <Card
                                key={element.id}
                                className={"card"}
                                id={element.id}
                                style={""}
                                img={element.urlImage[0].url}
                                description={element.price} 
                                title={element.name} 
                            />
                        })
                    }
                </>
            )
            
        }
    </section>
  )
}
