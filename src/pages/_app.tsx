import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logo from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from 'next/future/image'
import Cart from "../components/Cart"
import CartContextProvider from "../contexts/CartContext"
import { useRouter } from "next/router"
import Link from "next/link"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
          
          {
            pathname !== '/success' && <Cart />
          }
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
