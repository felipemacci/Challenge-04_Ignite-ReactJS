import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import { useContext, useState } from "react"
import Stripe from "stripe"
import { CartContext } from "../../contexts/CartContext"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isItemAlreadyAdded, addNewItem } = useContext(CartContext)

  const addItemToCart = () => {
    addNewItem(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={ addItemToCart } disabled={isItemAlreadyAdded(product.id)}>Add to cart</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      {
        params: {id: 'prod_Mfx8b7axrbK15n'}
      }
    ],
    
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id
      }
    },
    
    revalidate: 60 * 60 * 1 // 1 hour
  }
}