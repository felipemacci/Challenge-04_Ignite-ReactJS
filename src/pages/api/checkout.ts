import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cart } = req.body

  if(req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  if(!cart) {
    return res.status(404).json({
      error: 'Price not found'
    })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    mode: 'payment',
    line_items: cart.map(product => {
      return {
        price: product.defaultPriceId,
        quantity: 1
      }
    })
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}