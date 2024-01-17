import React from "react";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Account/Account";
import AdminRoutes from "./Admin/ProtectedRoutesForAdmin";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import ProductItemPage from "./Pages/ProductItemPage/ProductItemPage";
import ErrorPage from "./Pages/Error/Error";
import Unauthorized from "./Pages/Unauthorized/Unauthorized";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ProtectedRoutesForAdmin from "./Admin/ProtectedRoutesForAdmin";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import Admin from "./Admin/Admin";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "/order",
    element: (
      <ProtectedRoutes>
        <Order />
      </ProtectedRoutes>
    ),
  },
  { path: "/cart", element: <Cart /> },
  { path: "/account", element: <Account /> },
  {
    path: "/admin/*",
    element : <ProtectedRoutesForAdmin />
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/productItem/:id", element: <ProductItemPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "/unauthorized", element: <Unauthorized /> },
];
