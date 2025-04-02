import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/future/image'
import { CartContextProvider } from '../contexts/CartProvider'
import { CartDrawer } from '../components/drawer'
import { useCart } from '../hooks/useCart'

globalStyles()

function InnerApp({ Component, pageProps }: AppProps) {
    const { isCartOpen, closeCart, openCart } = useCart()

    return (
        <>
            <Container>
                <Header>
                    <Image src={logoImg} alt="" />
                    <button onClick={openCart}>🛒 Abrir carrinho</button>
                </Header>

                <Component {...pageProps} />
            </Container>

            <CartDrawer open={isCartOpen} onClose={closeCart} />
        </>
    )
}

function App(props: AppProps) {
    return (
        <CartContextProvider>
            <InnerApp {...props} />
        </CartContextProvider>
    )
}

export default App
