import { MAPPER_FIELDS } from "@/helpers/mapperFields"
import { usePayStore } from "@/libs/store/zustand/usePayStore"
import { Pay } from "@/Models/Pay"
// import { TableComponent } from "@@/TableComponent/TableComponent"
import { TableTest } from "@@/TableComponent/TableTest"
import { useEffect, useState } from "react"
import { OPTIONS_PAY_ACTIONS, OptionsPayTable, TABLE_PAY_HEADERS } from "./Payment.constants"
import { FieldTable } from "@/Models/Table"
import { OptionsActions } from "@/Models/OptionsActions"

export const Payments = () => {
  
  // const [pays, setPays] = useState<Pay[]>([])

  const [filterData, setFilterData] = useState<FieldTable<Pay, OptionsPayTable>[]>([])
  const payer = usePayStore(state=> state.pays)

  const getPayByPayerId = usePayStore(state => state.getPayByPayerId)

  const optionActions = ({detail, type}: OptionsActions<Pay, OptionsPayTable>)=>{
    console.log({detail,type})
    if(type == 'add'){
    }

  }

  useEffect(()=>{
    console.log(payer)
    // if(payer.length){
      getPayByPayerId("0f687bca-f8eb-417c-b672-49c5e26e3857")
        .then(pays=>{
          setFilterData(MAPPER_FIELDS<Pay, OptionsPayTable>(pays, OPTIONS_PAY_ACTIONS))
          // setPays(pays)
        })
    // }
  },[])
  return (
    <>
      {filterData?.length && 
        <TableTest<Pay, OptionsPayTable>  
          data={filterData} 
          headers={TABLE_PAY_HEADERS}
          editActions={()=>{}}
          optionsActions={optionActions}
        />
      }
      {/* <TableComponent/> */}
      {/* {pays?.length && (
        pays.map(pay=>(
          <div key={pay.id}>
            id:  {pay.id}
            paymentId: {pay.paymentId}
            description: {pay.description}
            amount: {pay.amount}
            state: {pay.state}
            payerId: {pay.payerId}
          </div>
        ))
      )} */}
    </>
  )
}
