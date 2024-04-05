import Router from "./Router";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router></Router>
    </CartContextProvider>
  );
}

export default App;
