import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart"
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}> 
          <Route index element={<Homepage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
