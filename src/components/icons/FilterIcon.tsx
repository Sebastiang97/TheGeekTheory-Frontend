import { SlidersHorizontal } from 'lucide-react'

export const FilterIcon = (props:any) => {
    const { children, ...rest } = props;
  return (
    <SlidersHorizontal {...rest} />
  )
}
