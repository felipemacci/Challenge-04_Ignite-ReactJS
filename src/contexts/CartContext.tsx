import { createContext, ReactNode, useState } from "react"

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface CartContextData {
  cart: Product[]
  isItemAlreadyAdded: (id: string) => boolean
  addNewItem: (product: Product) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const isItemAlreadyAdded = (id) => {
    return cart.some(item => item.id === id) ? true : false
  }

  const addNewItem = (product: Product) => {
    if(!isItemAlreadyAdded(product)) {
      setCart(state => [...state, product])
    }
  }

  const removeItem = (id: string) => {
    const newCart = cart.filter(item => item.id !== id)

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      isItemAlreadyAdded,
      addNewItem,
      removeItem
    }}>
      { children }
    </CartContext.Provider>
  )
}