import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { cartReducer, Item } from '../reducers/cart/reducer'
import {
    addItemAction,
    removeItemAction,
} from '../reducers/cart/actions'

interface CartContextType {
    cart: Item[]
    isCartOpen: boolean
    openCart: () => void
    closeCart: () => void
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(
        cartReducer,
        [],
        () => {
            if (typeof window !== 'undefined') {
                const stored = localStorage.getItem('@ignite-shop:cart-state-1.0.0')
                return stored ? JSON.parse(stored) : []
            }
            return []
        },
    )

    const [isCartOpen, setIsCartOpen] = useState(false)

    function openCart() {
        setIsCartOpen(true)
    }

    function closeCart() {
        setIsCartOpen(false)
    }

    function addItem(item: Item) {
        dispatch(addItemAction(item))
    }

    function removeItem(itemId: Item['id']) {
        dispatch(removeItemAction(itemId))
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('@ignite-shop:cart-state-1.0.0', JSON.stringify(cart))
        }
    }, [cart])

    return (
        <CartContext.Provider
            value={{
                cart,
                isCartOpen,
                openCart,
                closeCart,
                addItem,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
