import { ReactNode, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@@/ui/popover"
import { useCartToggleStore } from "@/libs/store/zustand/useCartToggleStore";
import { PopoverClose } from "@radix-ui/react-popover";

interface Props {
  classNameButton: string
  trigger: ReactNode
  content: ReactNode
  isOpen?: boolean
}

export const PopoverComponent:React.FC<Props> = ({trigger, classNameButton, content, isOpen}) => {
  const toggle = useCartToggleStore(state => state.toggle)
  
  useEffect(()=>{
    // document.addEventListener('click', (event:any) => {
    //   if (clickListenerActive) {
    //     document.removeEventListener('click', handleClick);
    //     clickListenerActive = false;
    //     console.log('Clics desactivados');
    //   } else {
    //       document.addEventListener('click', handleClick);
    //       clickListenerActive = true;
    //       console.log('Clics activados');
    //   }
    // });
  },[isOpen])

  return (
    <>
      { isOpen !== undefined 
        ? (
          <Popover open={isOpen}>
            <PopoverTrigger className={classNameButton} onClick={ () => toggle()}>
              {trigger}              
            </PopoverTrigger>
            <PopoverContent className="PopoverContent">
              <PopoverClose >
                <span className="cursor-pointer" onClick={ () => toggle()}>X</span>
              </PopoverClose>
              {content}
            </PopoverContent>
          </Popover>
        ) 
        : (
          <Popover >
            <PopoverTrigger className={classNameButton} >
              {trigger}
            </PopoverTrigger>
            <PopoverContent>
              {content}
            </PopoverContent>
          </Popover>
        ) 
      }
    </>
  )
}
