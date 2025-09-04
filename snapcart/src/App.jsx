import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

import { CartProvider } from "./context/CartContext";
import AuthPage from "./pages/AuthPage";
import ProductsPage from "./pages/ProductsPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./components/KidsPage";
import CustomSignInPage from "./pages/CustomSigninPage";
import CheckoutPage from "./pages/CheckoutPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/men",
        element: <MenPage />,
      },
      {
        path: "/women",
        element: <WomenPage />,
      },
      {
        path: "/kids",
        element: <KidsPage />,
      },
      {
        path: "/sign-in",
        element: <CustomSignInPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const App = () => {
  const a = 10;
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
};

export default App;
