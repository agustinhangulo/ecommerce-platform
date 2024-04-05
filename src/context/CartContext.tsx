import { createContext, useContext, useState } from "react";
import { CartItem } from "../util/CartTypes";


interface CartContextProviderProps {
    children: any
}

class CartContextType {
    cartItems: CartItem[];
    addToCart;
    removeFromCart;
    modifyCartQuantity;

    constructor() {
        this.cartItems = []
        this.addToCart = (product: any, quantity: number) => {}
        this.removeFromCart = (product: any) => {}
        this.modifyCartQuantity = (product: any, newQuantity: number) => {}
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
    
    const removeFromCart = (cartItem: CartItem) => {

        // Keep everything in cart except for cartItem
        const updatedCartItems = cartItems.filter( (currCartItem) => {
            if (currCartItem.product.id !== cartItem.product.id) {
                return cartItem;
            }
        } );
        
        setCartItems(updatedCartItems);
    }
    
    const modifyCartQuantity = (product: any, newQuantity: number) => {

        const updatedCartItems = cartItems.map( (currCartItem) => {
            if (currCartItem.product.id === product.id) {
                return new CartItem(product, newQuantity);
            } else {
                return currCartItem;
            }
        });

        setCartItems(updatedCartItems);
    }


    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        modifyCartQuantity
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;