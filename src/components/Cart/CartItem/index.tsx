import Image from "next/future/image";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CartItemContainer, CartItemInfo } from "./styles";

interface CartItemProps {
  id: string
  name: string
  image: string
  price: string
}

export default function CartItem({ id, name, image, price }: CartItemProps) {
  const { removeItem } = useContext(CartContext)

  const removeCartItem = () => {
    removeItem(id)
  }

  return (
    <CartItemContainer>
      <div className="product-picture">
        <Image src={image} width={94} height={94} alt="" />
      </div>

      <CartItemInfo>
        <p>{name}</p>
        <strong>{price}</strong>

        <button onClick={removeCartItem}>Remove</button>
      </CartItemInfo>
    </CartItemContainer>
  )
}