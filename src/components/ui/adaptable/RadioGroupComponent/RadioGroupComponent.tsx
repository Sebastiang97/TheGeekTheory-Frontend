import { RadioGroup } from "@@/ui/radio-group"

export const RadioGroupComponent = (props:any) => {
    const { children, ...rest } = props
  return (
    <RadioGroup {...rest}>
      {children}
    </RadioGroup>
  )
}
