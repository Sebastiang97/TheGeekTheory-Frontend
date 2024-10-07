import { TypeActions } from "@/Models/TypeActions"
import { DeleteIcon } from "@@/icons/DeleteIcon"
import { EditIcon } from "@@/icons/EditIcon"
import { PlusIcon } from "@@/icons/PlusIcon"
import "./AdminOptions.css"



interface Props{
  typeEvent: (type:TypeActions)=> void
}

export const AdminOptions = ({typeEvent}:Props) => {

  const actionOptions = (type:TypeActions) =>{
    typeEvent(type)
  }

  return (
    <section className="adminOptions">
      <PlusIcon onClick={()=> {actionOptions("add")}}/>
      <EditIcon onClick={()=> {actionOptions("edit")}}/>
      <DeleteIcon onClick={()=> {actionOptions("delete")}}/>
    </section>
  )
}
