import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField'
import { CartItem } from '../util/CartTypes';
import { useState } from 'react';

function CartItemQuantityInput({ cartItem } : CartItemQuantityInputProps) {

    const [quantity, setQuantity] = useState(cartItem.quantity)

    return (
        <Stack direction='row' alignItems='center' gap={1}>
            <IconButton
                color='primary'
                onClick={() => {console.log("-")}}
                aria-label={`Increase quantity of ${cartItem.product.title}`}
            >
                <RemoveIcon/>
            </IconButton>

            <TextField
                id=""
                label="Qty"
                value={quantity}
                onChange={(e) => {
                    let qtyNumber = parseInt(e.target.value)
                    setQuantity(qtyNumber);
                }}
                sx={{maxWidth: '3rem'}}
            />

            <IconButton
                color='primary'
                onClick={() => {console.log("+")}}
                aria-label={`Increase quantity of ${cartItem.product.title}`}
            >
                <AddIcon/>
            </IconButton>
        </Stack>
    );
}

interface CartItemQuantityInputProps {
    cartItem: CartItem,
}

export default CartItemQuantityInput;
