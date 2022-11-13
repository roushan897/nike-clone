import React from "react";
import styles from "./wishlist.module.css";
import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer";
import { WishlistContextProvider } from "../../context/Wishlist";
import { useContext } from "react";
import { ProductTable } from "../../components/ProductTable";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContextProvider);

  return (
    <Box className={styles.wishlistContainer}>
      <Navbar />
      <Box minH='500px'>
        <ProductTable {...{hello: '', shoesData: wishlist, reCart: "yes"}} />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
