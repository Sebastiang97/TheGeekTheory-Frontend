
import { create } from 'zustand'

interface PropsUseProduct {
    currentUrl: string
    setCurrentUrl: (url: string)=> void
}

export const useCustomProduct = create<PropsUseProduct>(
    (set, _) => ({
        currentUrl: "",
        setCurrentUrl: (url: string) =>{
            set({currentUrl: url})
        }
    })
)