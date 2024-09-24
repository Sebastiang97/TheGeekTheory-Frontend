import { DirectionPage } from "@/Models/DirectionPage"
import "./pagination.css"
interface Props {
    handlePagination: (direction: DirectionPage)=> void
}
export const Pagination = ({handlePagination}:Props) => {
    return (
        <section className="paginateActions">

            <button
                onClick={() => handlePagination("previous")}
            >
                Anterior
            </button>

            <button
                onClick={() => handlePagination("next")}
            >
                Siguiente
            </button>

        </section>
    )
}
