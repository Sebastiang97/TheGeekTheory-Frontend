import { forwardRef, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Props<T> {
  trigger?: ReactNode
  title: ReactNode
  description: ReactNode
  content: ReactNode
  cancelLabel: ReactNode
  continueLabel: ReactNode
  open: boolean
  setOpen: any
  isValid:boolean
  handleContinue: ()=>T
}

export const ModalForm = forwardRef(<T, >({
    trigger, 
    title, 
    description, 
    content,
    open, 
    setOpen,
    continueLabel,
    cancelLabel,
    isValid,
    handleContinue
  }: Props<T>, ref:any) => {

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {trigger && (
        <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
          <>
            {content}
          </>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction 
            onClick={()=> handleContinue()}
            disabled={isValid}
            >{continueLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
})
