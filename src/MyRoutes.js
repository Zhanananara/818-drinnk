import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import List from "./components/Admin/List/List";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/Auth/RequireAuth";
import NoMatch from "./pages/NoMatch";
import ProdDetail from "./pages/ProdDetail";
import Card from "./pages/Card";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import ResetPassword from "./pages/ResetPassword";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/cocktails" element={<Cocktails />} />

        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoMatch />} />
        <Route path="/card" element={<Card />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
