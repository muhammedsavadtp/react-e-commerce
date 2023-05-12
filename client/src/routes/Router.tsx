import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails"; // corrected typo
import PageNotFound from "../pages/PageNotFound";
import SignIn from "../pages/auth/SignIn"; // corrected capitalization
import SignUp from "../pages/auth/SignUp"; // corrected capitalization
import Cart from "../pages/cart/Cart";
import { useSelector } from "react-redux"; // removed unused useDispatch
import React, { Suspense } from "react";

const RouteLink = () => {
  const user = useSelector((state) => state.userSlice.userAuth);
  return (
    <>
      <Suspense fallback={<div className="text-black">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />{" "}
          {/* added slash */}
          <Route
            path="/product/category/:category"
            element={<ProductDetails />}
          />{" "}
          {/* added slash and changed parameter name */}
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />{" "}
          {/* changed redirect to Navigate and corrected capitalization */}
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />{" "}
          {/* corrected path capitalization */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteLink;
