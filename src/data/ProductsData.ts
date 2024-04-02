import {useState, useEffect} from 'react';


const BASE_URI = 'https://dummyjson.com/products';

function useProductsData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect( () => {(
    async () => {
      try {
          const response = await fetch(BASE_URI);
          if (response.status >= 400) {
            throw new Error('Could not fetch store items');
          }
          const responseJSON = await response.json();
          const data = await responseJSON;
          setProducts(data.products);
      } catch (error: any) {
          setError(error);
      } finally {
          setLoading(false);
      }
      })();
  }, []);

  return {products, loading, error};
}

export default useProductsData;
