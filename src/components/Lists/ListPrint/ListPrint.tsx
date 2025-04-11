import { PrintItem } from "@@/PrintItem/PrintItem"
import "./ListPrint.css"
import { Print } from "@/Models/Print"

interface Props {
    loading: boolean
    prints: Print[]
    handleSelected: (url:string)=> void
    isShow: boolean

}
export const ListPrint = ({loading, prints, handleSelected, isShow}:Props) => {


  return (
    <section>
        {
            loading ? (
                <div>loading</div>
            ) : (
                <>
                    {isShow && (<p>
                        Escoge un estampado o sube uno 
                    </p>)}
                    <section className="listPrints">
                        {/* {
                            prints.length ? (
                                prints.map(print=>(
                                    <PrintItem
                                        key={print.id}
                                        urlImage={print.url}
                                        name={print.name}
                                        author={print.author}
                                        handleSelected={handleSelected}
                                        isShow={isShow}
                                    />
                                ))
                            ) : (
                                <div>no prints</div>
                            )
                        } */}
                    </section>
                </>
            )
        }
    </section>
  )
}
