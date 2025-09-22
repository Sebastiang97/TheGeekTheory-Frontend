import { SheetComponent } from "@@/SheetComponent/SheetComponent"
import { Checkbox } from "@@/ui/checkbox"
import { Dispatch, SetStateAction } from "react"
import "./FilterComponent.css"

interface Props {
    isOpenFilter: boolean
    setIsOpenFilter: Dispatch<SetStateAction<boolean>>
}

export const FilterComponent = ({isOpenFilter, setIsOpenFilter}:Props) => {

    return (
        <SheetComponent
            classNameContent="bg-black"
            content={
                <section className="filters">
                    <h3>Filtros</h3>
                    

                    <div className="filter">
                        <Checkbox />
                        <p>Lo mas nuevo</p>
                    </div>
                    <div className="filter">
                        <Checkbox />
                        <p>Lo mas clasico</p>
                    </div>
                    <hr />
                    <div className="filter">
                        <Checkbox />
                        <p>Lo mas nuevo</p>
                    </div>
                    <div className="filter">
                        <Checkbox />
                        <p>Lo mas clasico</p>
                    </div>
                    <hr />

                </section>
            }
            isOpen={isOpenFilter}
            toggle={() => setIsOpenFilter}
            position={"right"}
        />
    )
}
