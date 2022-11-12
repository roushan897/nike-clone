import React, { useContext, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";

import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Cart } from "../Cart";
import { useNavigate } from "react-router-dom";
import { CartContextProvider } from "../../context/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import { Contact } from "../Contact";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { cart } = useContext(CartContextProvider);

  return (
    <Flex
      backdropFilter={"blur(10px)"}
      position="sticky"
      top="0"
      zIndex="99"
      padding="15"
      color="#fff"
      align="center"
    >
      <Box>
        <Image
          w={["40%", "20%", "10%"]}
          onClick={() => navigate("/")}
          cursor="pointer"
          src="https://i.postimg.cc/Gt36kSBM/logo.png"
          alt="logo"
        />
      </Box>

      <Flex fontSize="30" align="center">
        {/* <Box><HiOutlineSearch/></Box> */}
        <Cart />
        <Button
          onClick={() => navigate("/wishlist")}
          fontSize="30"
          colorScheme="transparent"
        >
          <AiOutlineHeart />
        </Button>
        {isAuthenticated ? (
          <Contact />
        ) : (
          <Button
            onClick={() => loginWithRedirect()}
            fontSize="30"
            colorScheme="transparent"
          >
            <IoMdContact />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
