import { create } from "zustand"

interface PropsUseProduct {
    isOpen: boolean
    toggle: () => void
}

export const useSideBarStore = create<PropsUseProduct>(
    (set, get) => ({
        isOpen: false,
        toggle: ()=>{
            set({isOpen: !get().isOpen})
        }
    })
)