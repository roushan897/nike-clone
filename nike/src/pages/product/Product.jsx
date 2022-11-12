import React, { useContext, useState } from "react";
import styles from './product.module.css';
import loadingImg from '../../assets/loading.gif';
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer";
import { ProductTable } from "../../components/ProductTable";

import { Box, Button, Flex, Grid, GridItem, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { CartContextProvider } from "../../context/Cart";
import { WishlistContextProvider } from "../../context/Wishlist";

export const Product = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const { addCart } = useContext(CartContextProvider);
  const { addWish } = useContext(WishlistContextProvider);
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  
  const getData =()=> {
    axios.get(`${process.env.REACT_APP_BASE_URL}/products?id=${id}`)
    .then((res)=>{      
      setData(res.data.msg);
      setLoading(false);
    })
  }

  useEffect(()=>{
    getData();
  },[id])
    
  return loading? <div className={styles.load}><img src={loadingImg} alt="loading" /></div> : (
    <>
    <Box color='#fff' className={styles.productContainer}>
        <Navbar/>
      <Grid
        templateAreas={ isLargerThan800? `
                  "image title"
                  "image desc"
        ` : `
        "title title"
        "image image"
        "desc desc"
        `}           
        gap="5"        
        m='auto' 
        mt='20'        
      >        
        <GridItem w={['100%', '95%', '70%']} m='auto' textAlign={isLargerThan800? '':'center'} p='5' borderRadius='15px' backdropFilter={'blur(20px)'} area={"title"}>
          <Box>
            <Text fontSize='lg' fontWeight='bold'>{data.title}</Text>
            <Text>{data.text}</Text>
            <Text mt='5' fontWeight='bold'>MRP : ₹ {data.price}</Text>
          </Box>
        </GridItem>

        <GridItem area={"image"}>
          <Image
          w={['80%', '80%', '100%']}
           _hover={{ transform: "rotate(-15deg)", cursor: "pointer" }}
           transition=".5s"
           transform="rotate(-25deg)"
           src={data.images} alt='productImg' />
        </GridItem>

        <GridItem w={['100%', '95%', '70%']} m='auto' mt={isLargerThan800? '' : '20'} p='5' borderRadius='15px' backdropFilter={'blur(20px)'} area={"desc"}>
          <Box>
            <Text fontSize='lg' fontWeight='bold'>Select Size</Text>
            <Flex flexWrap='wrap' color='#000' gap='5' my='5'>
                <Box><Button>UK 10.5</Button></Box>
                <Box><Button>UK 9.5</Button></Box>
                <Box><Button>UK 8.5</Button></Box>
                <Box><Button>UK 7.5</Button></Box>
                <Box><Button>UK 6.5</Button></Box>
            </Flex>
            <Flex gap='5' my='5'>
                <Button onClick={()=>addCart(data)} fontSize='x-large' variant='#000' bgColor='#000' gap='5'><HiOutlineShoppingBag/></Button>
                <Button onClick={()=>addWish(data)} fontSize='x-large' variant='#000' bgColor='#000' color='red' gap='5'><AiOutlineHeart/></Button>
            </Flex>
            <Box>
                <Text>{data.description}</Text>
            </Box>
          </Box>
        </GridItem>        
      </Grid>  

      <Box >
        <Text m='auto' mb='-10' w='95%' fontSize='40' fontWeight='bold'>You Might Also Like</Text>
        <ProductTable limit={'4'} hello={""}/>
      </Box>

      <Box>
        <Footer /> 
      </Box>    
    </Box>
    </>
  );
};
