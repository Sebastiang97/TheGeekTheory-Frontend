import { useModalStore } from "@/libs/store/zustand/useModalStore"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@@/ui/dialog"
import { ReactNode } from "react"

interface Props {
  title           : string
  description     : string
  trigger         : ReactNode
  content         : ReactNode
  confirmAction   : ()=> void
  cancelAction    : ()=> void
}

export const ModalComponent = ({
  title,
  description,
  trigger, 
  content, 
  confirmAction, 
  cancelAction
}:Props) => {
  const isOpen = useModalStore(state=> state.isOpen)
  const toggle = useModalStore(state=> state.toggle)

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {content}
        <section className="flex justify-center gap-1">
          <button onClick={()=> {
            toggle()
            confirmAction()
          }} >Aceptar</button>
          <button onClick={()=> {
            toggle()
            cancelAction()
          }} >Cancelar</button>
        </section>
      </DialogContent>
    </Dialog>
  )
}
