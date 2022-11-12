import React from "react";
import { Routes, Route } from "react-router-dom";
import { Procted } from "../components/hof/Procted";

import { Checkout } from "../pages/checkout/Checkout";
import { Home } from "../pages/home/Home";
import { PaymentSucces } from "../pages/paymentSuccess/PaymentSucces";
import { Product } from "../pages/product/Product";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <Procted>
              <Checkout />
            </Procted>
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/paymentsuccess" element={<PaymentSucces />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
