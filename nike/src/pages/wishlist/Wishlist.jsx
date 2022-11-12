import React from "react";
import styles from "./wishlist.module.css";
import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer";
import { WishlistContextProvider } from "../../context/Wishlist";
import { useContext } from "react";

export const Wishlist = () => {
  const { wishlist, removeWish } = useContext(WishlistContextProvider);

  console.log(wishlist)

  return (
    <Box className={styles.wishlistContainer}>
      <Navbar />

      <Box minH='500px'>
        <Text color='#fff'>Comming soon...</Text>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
