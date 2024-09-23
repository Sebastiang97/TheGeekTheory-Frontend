import { Popover, PopoverContent, PopoverTrigger } from "@@/ui/popover"
import { ReactNode } from "react";

interface Props {
  classNameButton: string
  trigger: ReactNode
  content: ReactNode
}

export const PopoverComponent:React.FC<Props> = ({trigger, classNameButton, content}) => {
  return (
    <Popover>
      <PopoverTrigger className={classNameButton} >
        {trigger}
      </PopoverTrigger>
      <PopoverContent>
        {content}
      </PopoverContent>
    </Popover>
  )
}
