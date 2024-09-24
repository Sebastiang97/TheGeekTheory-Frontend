import { MAPPER_FIELDS } from "@/helpers/mapperFields"
import { usePayStore } from "@/libs/store/zustand/usePayStore"
import { OptionsActions } from "@/Models/OptionsActions"
import { Pay } from "@/Models/Pay"
import { FieldTable } from "@/Models/Table"
import { TableTest } from "@@/TableComponent/TableTest"
import { useEffect, useState } from "react"
import { OPTIONS_PAY_ACTIONS, OptionsPayTable, TABLE_PAY_HEADERS } from "./Pays.constants"
import { LIMIT } from "@/constants/Paginate"
import { DirectionPage } from "@/Models/DirectionPage"
import { Pagination } from "@@/Pagination/Pagination"


export const Pays = () => {

  const [filterData, setFilterData] = useState<FieldTable<Pay, OptionsPayTable>[]>([])
  // const listAll = usePayStore(state => state.listAll)
  const getPaysAndPayer = usePayStore(state => state.getPaysAndPayer)
  
  const [previousCursor, setPreviousCursor] = useState("")
  const [nextCursor, setNextCursor] = useState("")

  const optionActions = ({ detail, type }: OptionsActions<Pay, OptionsPayTable>) => {
    console.log({ detail, type })
    if (type == 'add') {
    }

  }

  const handlePaginate = (direction:DirectionPage) => {
    getPaysAndPayer(direction === "next" ? nextCursor : previousCursor , LIMIT, direction)
      .then(pays=>{
        setNextCursor(pays.nextCursor)
        setPreviousCursor(pays.previousCursor)
        let p:any[] = []
        pays.content.map(pay=>{
          p.push({
            ...pay,
            ...pay.payer
          })
        })
        console.log(p)
        setFilterData(MAPPER_FIELDS<Pay, OptionsPayTable>(p, OPTIONS_PAY_ACTIONS))
      })
  }

  useEffect(() => {
    getPaysAndPayer("", LIMIT, "next")
      .then(pays=>{
        setNextCursor(pays.nextCursor)
        setPreviousCursor(pays.previousCursor)
        let p:any[] = []
        pays.content.map(pay=>{
          p.push({
            ...pay,
            ...pay.payer
          })
        })
        console.log(p)
        setFilterData(MAPPER_FIELDS<Pay, OptionsPayTable>(p, OPTIONS_PAY_ACTIONS))
      })
  }, [])
  return (
    <section className="container">
      {filterData?.length &&
        (
          <>
            <TableTest<Pay, OptionsPayTable>
              data={filterData}
              headers={TABLE_PAY_HEADERS}
              editActions={() => { }}
              optionsActions={optionActions}
            />
            <Pagination handlePagination={handlePaginate}/>
          </>
        )
      }
    </section>
  )
}
