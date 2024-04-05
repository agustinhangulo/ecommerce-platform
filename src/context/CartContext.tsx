import { createContext, useContext, useState } from "react";
import { CartItem } from "../util/CartTypes";


interface CartContextProviderProps {
    children: any
}

class CartContextType {
    cartItems: CartItem[];
    addToCart

    constructor() {
        this.cartItems = []
        this.addToCart = (product: any, quantity: number) => {}
    }
}


const CartContext = createContext(new CartContextType());

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children } : CartContextProviderProps) {
    const [cartItems, setCartItems]: [CartItem[], any] = useState([]);

    const addToCart = (product: any, quantity: number) => {

        // Check if product is already in cart or not
        const productInCart = cartItems.find( (cartItem : CartItem) => {
            return cartItem.product.id === product.id
        } );

        if ( productInCart !== undefined ) {  // If product already in cart
            // Update its quantity
            const updatedCartItems = cartItems.map( (cartItem) => {
                if (cartItem.product.id === product.id) {
                    cartItem.quantity += quantity
                }
                return cartItem;
            } );
            setCartItems(updatedCartItems);
        } else {
            // Otherwise, just add it to the cart
            setCartItems([...cartItems, new CartItem(product, quantity)]);
        }
    };

    const value = {
        cartItems,
        addToCart,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;