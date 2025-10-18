import { ArrowLeft } from 'lucide-react'

export const BackIcon = (props:any) => {
  const { children, ...rest } = props;

  return (
    <ArrowLeft {...rest} />
  )
}
