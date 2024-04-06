import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Search from './pages/Search';
import ProductPage from './pages/ProductPage';

function Router() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'search',
      element: <Search />,
    },
    {
      path: 'product/:productID',
      element: <ProductPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
