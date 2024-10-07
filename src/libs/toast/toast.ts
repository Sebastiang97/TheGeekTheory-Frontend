import { toast } from "sonner"

interface Props{
    message: string
    options: any
}

export const deleteToast = (id: string | number):void =>{
    toast.dismiss(id)
}

export const getMessageToast = ({message,options}:Props):string | number => {
    return toast(message, options)
}