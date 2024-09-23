import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useSideBarStore } from "@/libs/store/zustand/useSideBar"
import { ReactNode } from "react";

interface Props {
    classNameContent: string
    content: ReactNode
}
export const SheetComponent = ({classNameContent,content}:Props) => {
    const isOpen = useSideBarStore(state => state.isOpen)
    const toggle = useSideBarStore(state => state.toggle)
    return (
        <Sheet open={isOpen} onOpenChange={toggle}>
            <SheetContent 
                className={classNameContent}
                side="left"
            >
                {content}
            </SheetContent>
        </Sheet>
    )
}
