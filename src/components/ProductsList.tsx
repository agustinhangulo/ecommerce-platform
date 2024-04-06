import Box from "@mui/material/Box";
import useProductsData from "../data/ProductsData";
import Product from "./Product";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from "@mui/material/Stack";


function ProductsList({query = ''}) {

    const {products, loading, error} = useProductsData(query);

    // TODO: 
    if (error) {
        return (
            <Stack padding={4}>
                <Typography variant="h5" color="initial">Error encountered while retrieving products.</Typography>
            </Stack>
        );
    }
    else if (loading) {
        return (
            <Stack padding={4} alignItems='center' justifyContent='center'>
                <Typography variant="h5" color="initial">Loading...</Typography>
            </Stack>
        );
    }

    return (
        <Box padding={4}>
            <Grid container spacing={2} justifyContent='center' alignItems='stretch'> 
            {
                products.length !== 0 ?
                    products.map( (productObj: any) => {
                        // console.log(productObj);
                        return (
                            <Grid item key={productObj.id}>
                                <Product product={productObj} />
                            </Grid>
                        );
                    })
                :
                    <Typography variant="h5" component='p' color="initial" mt={2}>No products found.</Typography>
            }
            </Grid>
        </Box>
    );
}

interface ProductsListProps {
    query: String,
}

export default ProductsList;