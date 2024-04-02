import Box from "@mui/material/Box";
import useProductsData from "../data/ProductsData";
import Product from "./Product";
import Grid from '@mui/material/Grid'

function ProductsList() {

    const {products, loading, error} = useProductsData();

    // TODO: 
    if (error) return <p>Error encountered while opening shop</p>
    else if (loading) return <p>Loading...</p>

    return (
        <Box padding={4}>
            <Grid container spacing={2} justifyContent='center' alignItems='stretch'> 
            {
                products.map( (productObj: any) => {
                    console.log(productObj);
                    return (
                        <Grid item key={productObj.id}>
                            <Product product={productObj} />
                        </Grid>
                    );
                })
            }
            </Grid>
        </Box>
    );
}

export default ProductsList;