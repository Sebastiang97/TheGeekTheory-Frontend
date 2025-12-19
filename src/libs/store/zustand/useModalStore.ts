import { create } from "zustand"

interface Props {
    isOpen: boolean
    toggle: () => void
    info: any
    setInfo: (info: any)=> void
}

export const useModalStore = create<Props>(
    (set, get) => ({
        info: undefined,
        isOpen: false,
        toggle: ()=>{
            set({isOpen: !get().isOpen})
        },
        setInfo: (info)=>{
            set({info: info})
        }
    })
)