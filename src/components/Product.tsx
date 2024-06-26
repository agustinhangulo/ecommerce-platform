import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


function Product({product}: ProductProps) {

    return (
        <>
            <Card variant='outlined' sx={{width: '320px', height: '100%'}}>
                <CardActionArea sx={{height: '100%'}}>
                    <StyledLink to={`/product/${product.id}`}>
                        <CardMedia
                            component='img'
                            image={product.thumbnail}
                            height="192"
                            sx={{
                                objectFit: 'contain'
                            }}
                        />
                        <CardContent>
                            <Typography variant='h6' color='initial'>
                                {product.title}
                            </Typography>
                            <Rating value={product.rating} precision={0.5} size='small' readOnly/>
                            <Typography variant='body1' color='text.secondary'>
                                ${product.price}
                            </Typography>
                        </CardContent>
                    </StyledLink>
                </CardActionArea>
            </Card>

        </>
    );
}

interface ProductProps {
    product: any,
}

const StyledLink = styled(Link)((_) => ({
    textDecoration: 'none',

    '&:hover': {
        backgroundColor: 'inherit'
    }
}));

export default Product;
