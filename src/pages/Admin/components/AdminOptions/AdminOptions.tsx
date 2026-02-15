import { TypeActions } from "@/Models/TypeActions"
import { DeleteIcon } from "@@/icons/DeleteIcon"
import { EditIcon } from "@@/icons/EditIcon"
import { PlusIcon } from "@@/icons/PlusIcon"
import "./AdminOptions.css"
import { View } from "@@/icons/View"
import { useLocation } from "react-router-dom"

export type ModeAdminOptions = "btns" | "icons"

interface Props{
  typeEvent: (type:TypeActions)=> void
  type?: ModeAdminOptions
}

export const AdminOptions = ({typeEvent,type}:Props) => {

  const { pathname } = useLocation()

  const actionOptions = (type:TypeActions) =>{
    typeEvent(type)
  }

  return (
    <>
      {pathname.includes('/admin/') && (
        <>
          {type === "btns"? (
            <div className="flex gap-1">
              <button onClick={()=> {actionOptions("delete")}}>elininar</button>
              <button onClick={()=> {actionOptions("edit")}}>editar</button>
              <button onClick={()=> {actionOptions("add")}}>añadir</button>
            </div>
          ) : (
            <section className="contAdminOptions">
              <section className="adminOptions">
                <View onClick={()=> {actionOptions("view")}}/>
                <PlusIcon onClick={()=> {actionOptions("add")}}/>
                <EditIcon onClick={()=> {actionOptions("edit")}}/>
                <DeleteIcon onClick={()=> {actionOptions("delete")}}/>
              </section>
            </section>
          )}
        </>
      )}
    </>
  )
}
