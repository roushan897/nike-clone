import React from "react";
import styles from "./wishlist.module.css";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer";
import { WishlistContextProvider } from "../../context/Wishlist";
import { useContext } from "react";
import { ProductTable } from "../../components/ProductTable";
import emptylist from '../../assets/empty-wishlist.png';

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContextProvider);
 
  return (
    <Box className={styles.wishlistContainer}>
      <Navbar />
      <Box minH='500px'>
        { wishlist.length>0? <ProductTable {...{hello: '', shoesData: wishlist, reCart: "yes"}} />        
          : <Flex justify='center' align='center'>
             <Image src={emptylist} alt='empty wishlist' />
          </Flex>        
        }        
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
