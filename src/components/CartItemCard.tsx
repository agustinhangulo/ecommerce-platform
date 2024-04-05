import styled from "@emotion/styled";
import { CartItem } from "../util/CartTypes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import CartItemQuantityInput from "./CartQuantityInput";
import { useCartContext } from "../context/CartContext";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';


function CartItemCard( { cartItem } : CartItemCardProps ) {

    const { removeFromCart } = useCartContext();

    return (
        <Card variant="outlined" sx={{width: '100%', maxWidth: '1024px'}}>
            <StyledCardContent>
                <Box display='flex' alignItems='center' gap={2}>
                    <StyledImg src={cartItem.product.thumbnail} alt={cartItem.product.title} />
                    <Box>
                        <Typography 
                            variant="h6" 
                            component='p' 
                            sx={{fontWeight: 'bold'}}
                        >
                            {cartItem.product.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            ${cartItem.product.price}
                        </Typography>
                    </Box>
                </Box>
                <Stack direction='row' alignItems='center' spacing={1}>
                    <IconButton
                        onClick={() => removeFromCart(cartItem)}
                        aria-label={`Remove ${cartItem.product.title} from cart`}
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <Divider orientation='vertical' flexItem/>

                    <CartItemQuantityInput cartItem={cartItem} />
                </Stack>
            </StyledCardContent>
        </Card>
    );
}

interface CartItemCardProps {
    cartItem: CartItem,
}

const StyledImg = styled('img')((_) => ({
    width: '64px',
    aspectRatio: '1/1',

    borderRadius: '16px',
    border: '1px solid #666666',
    
    objectFit: 'cover'
}));

const StyledCardContent = styled(CardContent)((_) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
}));


export default CartItemCard;
