import { ShoppingCart } from "lucide-react";

export const ShoppingCartIcon = (props: any) => {
    const { children, ...rest } = props;

  return (
    <ShoppingCart {...rest} />
  )
}
