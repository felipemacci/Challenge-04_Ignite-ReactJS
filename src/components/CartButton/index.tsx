import { Handbag } from "phosphor-react";
import { ComponentProps, useContext } from "react";
import { CartContext, Product } from "../../contexts/CartContext";
import { CartButtonContainer, ItemsCounter } from "./styles";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  product?: Product
}

export default function CartButton({ ...props }: CartButtonProps) {
  const { cart } = useContext(CartContext)

  return (
    <CartButtonContainer {...props}>
      <Handbag weight="bold" />
      {cart.length > 0 && <ItemsCounter>{cart.length}</ItemsCounter>}
    </CartButtonContainer>
  )
}