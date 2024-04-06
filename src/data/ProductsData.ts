import {useState, useEffect} from 'react';


const BASE_URI = 'https://dummyjson.com';
const PRODUCTS_PARAM = '/products';
const SEARCH_PARAM = '/search';

function useProductsData(query: String = '') {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect( () => {(
    async () => {
      try {
        const parsedQuery = parseQuery(query);
        const response = await fetch(parsedQuery);
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
  }, [query]);

  return {products, loading, error};
}

// Parse query into form usable for searching
function parseQuery( query: String ) : string {
  if (query === '') {
    // If nothing passed, just show all items
    return BASE_URI + PRODUCTS_PARAM;
  } else {
    return BASE_URI + PRODUCTS_PARAM + SEARCH_PARAM + '?q=' + query;
  }
} 

export default useProductsData;
