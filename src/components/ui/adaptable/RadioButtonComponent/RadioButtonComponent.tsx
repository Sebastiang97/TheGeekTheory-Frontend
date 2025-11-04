import { RadioGroupItem } from "@@/ui/radio-group"


export const RadioButtonComponent = (props:any) => {
    const { children, ...rest } = props
  return (
    <RadioGroupItem 
      {...rest} 
    />
  )
}
