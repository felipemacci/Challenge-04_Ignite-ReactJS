import Image from "next/future/image";
import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductsSkeletons from "../components/ProductsSkeletons";
import CartButton from "../components/CartButton";
import { CartContext } from "../contexts/CartContext";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [isProductsLoaded, setIsProductsLoaded] = useState(false)
  const { addNewItem, isItemAlreadyAdded } = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => setIsProductsLoaded(true), 2000)
  }, [])

  const [sliderRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  const handleAddToCart = (event, product) => {
    event.preventDefault()

    addNewItem(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        {
          isProductsLoaded ? (
            <div className="embla" ref={ sliderRef }>
              <SliderContainer className="embla__container container">
                {
                  products.map(product => {
                    return (
                      <Link href={`product/${product.id}`} prefetch={false} key={product.id}>
                        <Product className="embla__slide">
                          <Image src={product.imageUrl} alt="" width={520} height={480} />
          
                          <footer>
                            <div>
                              <strong>{product.name}</strong>
                              <span>{product.price}</span>
                            </div>

                            <CartButton
                              type="product"
                              onClick={(event) => handleAddToCart(event, product)}
                              disabled={isItemAlreadyAdded(product.id)}
                            />
                          </footer>
                        </Product>
                      </Link>
                    )
                  })
                }
              </SliderContainer>
            </div>
          ) : (
            <ProductsSkeletons />
          )
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },

    revalidate: 60 * 60 * 2 // 2 hours
  }
}
