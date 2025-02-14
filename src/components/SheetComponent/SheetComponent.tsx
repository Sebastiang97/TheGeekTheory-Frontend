import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ReactNode } from "react";

interface Props {
    classNameContent: string
    content: ReactNode
    isOpen: boolean
    toggle: ()=> void
    position: "top" | "right" | "bottom" | "left"
}
export const SheetComponent = ({
    classNameContent,
    content,
    isOpen,
    toggle,
    position
}:Props) => {
    return (
        <Sheet open={isOpen} onOpenChange={toggle}>
            <SheetContent 
                className={classNameContent}
                side={position}
            >
                {content}
            </SheetContent>
        </Sheet>
    )
}
