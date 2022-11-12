import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from "./context/Wishlist";
import { CartProvider } from "./context/Cart";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <Auth0Provider
              domain={process.env.REACT_APP_DOMAIN} 
              clientId={process.env.REACT_APP_CLIENTID}
              redirectUri={window.location.origin}
            >
              <App />
            </Auth0Provider>
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
