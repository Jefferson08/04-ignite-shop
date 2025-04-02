import Image from "next/future/image"
import Head from 'next/head'
import { GetStaticProps } from "next"
import Link from "next/link"

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { useCart } from "../hooks/useCart"

interface HomeProps {
    products: {
        id: string
        name: string
        imageUrl: string
        price: number // ← agora é number
    }[]
}

export default function Home({ products }: HomeProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    });

    const { addItem, openCart } = useCart()

    function handleAddToCart(product: HomeProps['products'][0]) {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
        })

        openCart()
    }

    return (
        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>

            <HomeContainer ref={sliderRef} className="keen-slider">
                {products.map(product => {
                    return (
                        <div key={product.id} className="keen-slider__slide">
                            <Link href={`/product/${product.id}`} prefetch={false}>
                                <Product>
                                    <Image src={product.imageUrl} width={520} height={480} alt="" />

                                    <footer>
                                        <strong>{product.name}</strong>
                                        <span>{product.price}</span>
                                    </footer>
                                </Product>
                            </Link>

                            {/* Botão fora do <Link /> */}
                            <button onClick={() => handleAddToCart(product)}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    )
                })}
            </HomeContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
