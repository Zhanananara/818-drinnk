import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import Toastify from "./components/Toastify/Toastify";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavContextProvider from "./contexts/FavContextProvider";
import ComContextProvider from "./contexts/ComContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <ComContextProvider>
        <FavContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <Toastify />
              <MyRoutes />
            </ProductContextProvider>
          </CartContextProvider>
        </FavContextProvider>
      </ComContextProvider>
    </AuthContextProvider>
  );
}

export default App;
