import Card from "@mui/material/Card";
import { useCartContext } from "../context/CartContext";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { CartItem } from "../util/CartTypes";
import CartItemCard from "./CartItemCard";


function CartItems() {
    const {cartItems} = useCartContext();


    if (cartItems.length === 0 ) {
        return (
            <StyledBox padding={4}>
                <EmptyCartMessage />
            </StyledBox>
        );
    } else {
        return (
            <Box padding={4}>
                <Stack gap={2} alignItems='center'>
                    {
                        cartItems.map( (cartItem: CartItem) => {
                            return (
                                <CartItemCard key={cartItem.product.id} cartItem={cartItem} />
                            );
                        })
                    }


                    <SubtotalCheckoutArea direction='row' justifyContent='space-between' flexWrap='wrap' gap={2}>
                        <Box sx={{display:'flex', gap: '1rem'}}>
                            <Typography variant="h6" component='p'>Subtotal ({calcCartTotalItems(cartItems)} items):</Typography>
                            <Typography variant="h6" component='p' fontWeight='bold'>${calcSubtotal(cartItems)}</Typography>
                        </Box>
                        <Button variant="contained" color="primary">
                            Checkout
                        </Button>
                    </SubtotalCheckoutArea>
                </Stack>
            </Box>
        );
    }

}

function EmptyCartMessage() {
    return (
        <>
            <Card variant='outlined' sx={{width: '100%', maxWidth: '512px'}}>
                <CardContent>
                    <Stack padding={2} spacing={3} justifyContent='center' alignItems='center' width='100%'>
                        <Typography variant="h5" textAlign='center'>Your cart is empty.</Typography>
                        <Stack gap={1} alignItems='center'>
                            <StyledLink to='/'>
                                <Button variant="contained" sx={{width: '100%'}}>
                                    Shop
                                </Button>
                            </StyledLink>
                            <StyledLink to='/search'>
                                <Button variant="outlined" sx={{width: '100%'}}>
                                    Search for items
                                </Button>
                            </StyledLink>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card> 
        </>
    )
}

function calcSubtotal(cartItems: CartItem[]): number {
    const sum = cartItems.reduce( (sum, cartItem) => {
        return sum + (cartItem.product.price * cartItem.quantity)
    }, 0 )

    return sum;
}

function calcCartTotalItems(cartItems: CartItem[]): number {
    const sum = cartItems.reduce( (sum, cartItem) => {
        return sum + cartItem.quantity
    }, 0 )
    return sum;
}

const StyledLink = styled(Link)((_) => ({
    display: 'flex',
    justifyContent: 'center',

    color: 'white',
    textDecoration: 'none',

    width: '100%',
}));

const StyledBox = styled(Box)((_) => ({
    display: 'flex',
    justifyContent: 'center',
}));

const SubtotalCheckoutArea = styled(Stack)((_) => ({
    width: '100%', 
    maxWidth: '1024px',

    '@media (max-width: 512px)': {
        justifyContent: 'center',
        flexDirection: 'column',
    }
}))

export default CartItems;
