import { create } from "zustand"

interface Props {
    isOpen: boolean
    toggle: () => void
}

export const useCartToggleStore = create<Props>(
    (set, get) => ({
        isOpen: false,
        toggle: ()=>{
            set({isOpen: !get().isOpen})
        }
    })
)