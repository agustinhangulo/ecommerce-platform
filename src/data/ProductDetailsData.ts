import {useState, useEffect} from 'react';


const BASE_URI = 'https://dummyjson.com/products/';

function useProductData(productID: string) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect( () => {(
    async () => {
      try {
          const response = await fetch(BASE_URI + productID);
          if (response.status >= 400) {
            throw new Error('Could not fetch store items');
          }


          const responseJSON = await response.json();
          const data = await responseJSON;
          setProduct(data);
      } catch (error: any) {
          setError(error);
      } finally {
          setLoading(false);
      }
      })();
  }, []);

  return {product, loading, error};
}

export default useProductData;
