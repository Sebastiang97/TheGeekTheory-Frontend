import { create } from "zustand"

interface Props {
    isOpen: boolean
    toggle: () => void
}

export const useSideBarStore = create<Props>(
    (set, get) => ({
        isOpen: false,
        toggle: ()=>{
            set({isOpen: !get().isOpen})
        }
    })
)