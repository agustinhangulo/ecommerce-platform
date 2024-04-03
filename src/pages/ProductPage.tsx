import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";


function ProductPage() {
    
    let { productID } = useParams();
    if (typeof(productID) !== 'string') productID = '1'

    return (
        <>
            <Header />
            <ProductDetails productID={productID} />
        </>
    );
}

export default ProductPage;
