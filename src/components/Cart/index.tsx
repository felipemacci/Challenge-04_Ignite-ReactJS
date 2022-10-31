import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { CartContext } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";
import CartButton from "../CartButton";
import CartItem from "./CartItem";
import { CartCloser, CartContainer } from "./styles";

export default function Cart() {
  const { cart } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const cartItemsValue = cart.map(item => Number(item.price.slice(1,)))

  const totalCartValue = cartItemsValue.reduce((prev, curr) => prev + curr,0,)

  const totalValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalCartValue)

  const handleBuyProducts = async() => {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cart
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch(error) {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton type="header" />
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <CartContainer>
          <header>
            <CartCloser>
              <X size={24} weight="bold" />
            </CartCloser>
          </header>

          <section className="list">
            <h3>Shop Cart</h3>
            
            {
              cart.length > 0 ? (
                <ul>
                  {
                    cart.map(item => {
                      return (
                        <CartItem
                          id={ item.id }
                          name={ item.name }
                          image={ item.imageUrl }
                          price={ item.price }
                          key={ item.id }
                        />
                      )
                    })
                  }
                </ul>
              ) : (
                <p>No items in your cart :P</p>
              )
            }
          </section>

          <footer>
            <table>
              <tr>
                <td>Quantity</td>
                <td>{cart.length} items</td>
              </tr>
              <tr>
                <td>Total value</td>
                <td>{totalValue}</td>
              </tr>
            </table>

            <button onClick={handleBuyProducts} disabled={isCreatingCheckoutSession || cart.length === 0}>Finalize Purchase</button>
          </footer>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}