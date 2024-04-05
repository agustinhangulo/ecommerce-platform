import Box from "@mui/material/Box";
import useProductData from "../data/ProductDetailsData";
import Typography from '@mui/material/Typography'
import Rating from "@mui/material/Rating";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from '@mui/material/Button'
import { useContext, useState } from "react";
import { useCartContext } from "../context/CartContext";





function ProductDetails({productID}: ProductDetailsProps) {

    const { product, loading, error } = useProductData(productID);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartContext();

    if (error) return <p>Error encountered while finding product</p>
    else if (loading) return <p>Loading...</p>

    return (
        <>
            <Box display='flex' justifyContent='center' padding={4} gap={4} flexWrap='wrap'>
                <StyledImg src={product.thumbnail} alt={product.title} />
                <InfoWrapper>
                    <Typography variant="h4" component='h1' color="initial"> {product.title} </Typography>
                    <Typography variant="body1" color="text.secondary">{product.brand}</Typography>
                    <Box display='flex' alignItems='center' gap={1} mb={2} >
                        <Rating value={product.rating} precision={0.5} size='small' readOnly/>
                        <Typography variant="body1" color="text.secondary">{product.rating}</Typography>
                    </Box>
                    <Typography variant="h5" component='h1' color="initial"> ${product.price} </Typography>

                    <StyledDivider />

                    <Typography variant="body1" color="initial">
                        {product.description}
                    </Typography>
                    <Box mt={5}>
                        <FormControl sx={{display: 'flex', gap: '8px'}}>
                            <InputLabel>Quantity</InputLabel>
                            <Select
                                label="Quantity"
                                defaultValue={1}
                                onChange={ (e) => setQuantity(e.target.value) }
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={ () => {
                                    addToCart(product, quantity)
                                }}
                            >
                              Add to cart
                            </Button>
                        </FormControl>
                    </Box>
                </InfoWrapper>
            </Box>
        </>
    )
}

const StyledImg = styled('img')((_) => ({
    width: '512px',
    maxWidth: '100%',
    maxHeight: '640px',

    borderRadius: '16px',
    border: '1px solid #666666',
    
    objectFit: 'contain'
}));

const StyledDivider = styled(Divider)((_) => ({
    marginTop: '4px',
    marginBottom: '16px',
}));

const InfoWrapper = styled(Box)((_) => ({
    width: '512px',
    maxWidth: '100%',
}));

interface ProductDetailsProps {
    productID: string,
}

export default ProductDetails;