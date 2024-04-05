import { CartItem } from '../util/CartTypes';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useCartContext } from '../context/CartContext';

const MAX_QUANTITY = 5;

function CartItemQuantityInput({ cartItem } : CartItemQuantityInputProps) {

    const [quantity, setQuantity] = useState(cartItem.quantity)
    const { modifyCartQuantity } = useCartContext();

    const maxQty = cartItem.product.stock < MAX_QUANTITY ? cartItem.product.stock : MAX_QUANTITY ;

    return (
        <FormControl sx={{display: 'flex', gap: '8px'}}>
            <InputLabel>Qty</InputLabel>
            <Select
                label="Quantity"
                value={quantity}
                onChange={ (e) => {
                    let newQty = parseInt(e.target.value);
                    setQuantity(newQty);
                    modifyCartQuantity(cartItem.product, newQty);
                } }
            >
                {
                    range(maxQty).map( (i) => {
                        return (<MenuItem key={i} value={i}>{i}</MenuItem>);
                    }) 
                }
            </Select>
        </FormControl>
    );
}

function range(end: number) : number[] {
    const result =  [];
    for (let i = 1; i <= end; i++) {
        result.push(i);
    }
    return result;
} 


interface CartItemQuantityInputProps {
    cartItem: CartItem,
}

export default CartItemQuantityInput;
