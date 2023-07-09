/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { CartModal } from "../components";

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartOpen, setCartOpen] = useState(false)

    useMemo(() => {
        const items = localStorage.getItem('cart')
        if (items) {
            setCartItems(JSON.parse(items))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    function editCart(product, quantity) {
        const item = cartItems.find(item => item.id === product.id)

        setCartItems(existItems => {
            if (item) {
               return existItems.map((existItem) => (
                    existItem.id === product.id ? {
                        id: existItem.id,
                        slug: existItem.slug,
                        name: existItem.name,
                        price: existItem.price,
                        quantity
                    } : existItem
                ))
            }

            return [
                ...existItems, {
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    quantity
                }
            ]
        })
    }

    function removeAllItems() {
        return setCartItems([])
    }

    function removeOneItem(id) {
        setCartItems(
            cartItems.filter((item) => item.id !== id)
        )
    }

    function getTotalPrice() {
        return cartItems.reduce((total, { price, quantity }) => total += (price * quantity), 0)
    }

    return (
        <CartContext.Provider 
            value={{
                editCart,
                removeAllItems,
                removeOneItem,
                getTotalPrice,
                setCartOpen,
                cartOpen,
                cartItems
            }}>
            {children}
            <CartModal />
        </CartContext.Provider>
    )
}