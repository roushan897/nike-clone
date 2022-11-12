import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export const Footer = ({mt}) => {
  return (
    <Box
      color="#fff"
      bgGradient="linear(to-b, blue.400, #160597)"
      mt={mt? mt : ''}
      py="10"
    >
      <SimpleGrid textAlign='left' w={["90%", "80%", "50%"]} m="auto" mb='8' align="center" columns={3} spacing={10}>
        <Box>
          <Text fontWeight='bold'>ABOUT NIKE</Text>
          <Box>
            <Text>News</Text>
            <Text>Careers</Text>
            <Text>Investos</Text>
            <Text>Prupose</Text>
            <Text>Sustainability</Text>
          </Box>  
        </Box>
        <Box>
          <Text fontWeight='bold'>Get Help</Text>
          <Box>
            <Text>Order Status</Text>
            <Text>Shipping & Delivery</Text>
            <Text>Payment Options</Text>
            <Text>Gift Card Balance</Text>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>Blog</Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight='bold'>Company</Text>
          <Box>
            <Text>Gift Cards</Text>
            <Text>Promotions</Text>
            <Text>Find A Store</Text>
            <Text>Signup</Text>
            <Text>Nike Jouneral</Text>
            <Text>Send Us Feeback</Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Text align="center">
        Copyright© All Reserved Rights JSSTACK DEVELOPERS 2022
      </Text>
    </Box>
  );
};
