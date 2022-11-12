import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { ImBin } from 'react-icons/im';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { CartContextProvider } from '../context/Cart';
import { useEffect } from 'react';

export const Cart = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const { cart, countCart, removeCart } = useContext(CartContextProvider);
  const [totalPrice, setTotalPrice] = useState(0);
  const toast = useToast();
  


 const getCount = () =>{
  let count=0;
  for(let el of cart){
    count+= el.price * el.count;
  }
  setTotalPrice(count);
 }

 useEffect(()=>{
  getCount()
 },[countCart])

  return (
    <>
      <Button fontSize='30' ref={btnRef} colorScheme='transparent' onClick={onOpen}>
        <HiOutlineShoppingBag/>
        {cart.length>0? <span style={{fontSize: '16px', borderRadius: '50%', padding: '2px 5px', marginLeft: '-10px', color: '#000', backgroundColor: '#fff'}}>{cart.length}</span> : ''}        
      </Button>
      <Drawer       
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent color='#fff'  backdropFilter={'blur(10px)'} bgColor='transparent'>
          <DrawerCloseButton fontSize='x-large' />
          <DrawerHeader>Welcome to your Cart</DrawerHeader>
          
          <DrawerBody>
            <Box>
              {cart.length==0? <Flex h='90vh' justify='center' align='center'>
                <Image w='50%' src='https://i.postimg.cc/xCFdk5dq/emptybag.png' alt='cart' />
              </Flex> 
              : cart.map((el,i)=>(
                <Flex key={i} bgColor='blue.700' p='3' borderRadius='5' justify='space-between' mt='5'>
                <Box transition='.5s' _hover={{cursor: 'pointer', transform: 'scale(1.09)'}} w='40%' borderRadius='5' p='2'  bgColor='red.300'>
                  <Image w='100%' src={el.images} alt='cartImg' />
                </Box>

                <Box>
                  <Text fontWeight='bold'>{el.title}</Text>
                  <Text>{el.text}</Text>
                  <Flex gap='3' align='center' mt='2'>
                    <Button onClick={()=>countCart({count: el.count-1, id: el._id, type: "dec"})} variant='#000' fontSize='x-large' bgColor='#000' size="sm">-</Button>
                    <Text>{el.count}</Text>
                    <Button onClick={()=>countCart({count: el.count+1, id: el._id, type: "inc"})} variant='#000' fontSize='x-large' bgColor='#000' size="sm">+</Button>
                  </Flex>
                </Box>

                <Flex direction='column' justify='space-between'>
                  <Text>₹ {el.price}</Text>
                  <Button onClick={()=>removeCart(el._id)} variant='#000' fontSize='lg' bgColor='#000' size="sm"><ImBin/></Button>
                </Flex>
                </Flex>
              ))}
            </Box>
          </DrawerBody>   

          <Box w='90%' m='auto' fontSize='lg' fontWeight='bold'>Total:- ₹ {totalPrice}</Box>
          <DrawerFooter>            
            <Button onClick={()=> cart.length>=1? navigate('/checkout') : toast({title: "please add products in cart.", position: 'top', status: 'error', isClosable: true})} w='100%' colorScheme='blue'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
};
