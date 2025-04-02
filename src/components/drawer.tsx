import { Drawer, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import {
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    ProductItem,
    ProductList,
    ProductName,
    ProductPrice,
    RemoveButton,
    Summary
} from '../styles/components/drawer'
import { useCart } from '../hooks/useCart'

interface CartDrawerProps {
    open: boolean
    onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
    const { cart, removeItem } = useCart()

    const total = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader>
                    <h2>Sacola de compras</h2>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>

                <ProductList>
                    {cart.map((product) => (
                        <ProductItem key={product.id}>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={100}
                                height={100}
                            />
                            <div>
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(product.price)}
                                </ProductPrice>
                                <RemoveButton onClick={() => removeItem(product.id)}>
                                    Remover
                                </RemoveButton>
                            </div>
                        </ProductItem>
                    ))}
                </ProductList>

                <DrawerFooter>
                    <Summary>
                        <div>
                            <span>Quantidade</span>
                            <span>{cart.length} itens</span>
                        </div>
                        <div>
                            <strong>Valor total</strong>
                            <strong>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(total)}
                            </strong>
                        </div>
                    </Summary>
                    <button>Finalizar compra</button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
