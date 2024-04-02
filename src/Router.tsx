import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

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
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
