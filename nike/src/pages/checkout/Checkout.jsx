import React, { useContext, useEffect, useState } from 'react';
import styles from './checkout.module.css';

import { Box, Button, Flex, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { Navbar } from '../../components/navbar/Navbar';
import { Address } from '../../components/Address';
import { CartContextProvider } from '../../context/Cart';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  let addr = JSON.parse(localStorage.getItem('nike_address'));
  const [address, setAddress] = useState(addr);
  const [cardDetails, setCardDetails] = useState({});
  const { cart, removeAll } = useContext(CartContextProvider);
  const [totalPrice, setTotalPrice] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      removeAll();
      setLoading(false);
      navigate('/paymentsuccess');
    },2000)
  }

  const getCount = () =>{
    let count=0;
    for(let el of cart){
      count+= el.price * el.count;
    }
    setTotalPrice(count);
   }
  
   useEffect(()=>{
    getCount()
   },[])
  
  return (
    <Box className={styles.checkoutContainer}>
      <Navbar/>

      <Flex direction={["column","row", "row"]} minH='60Vh' w='90%' m='auto' justify='center'  gap='20' mt='20'>      
        <Box h='fit-content' backdropFilter={'blur(10px)'} padding='10' borderRadius='15px' color='#fff'>          
          <form onSubmit={handleSubmit}>
            <Box>
              <FormLabel fontSize='x-large' fontWeight='bold'>Choose Payment Method:</FormLabel>
              <Flex gap='10'>
                <Flex gap='3'>
                  <input style={{width: '20px', cursor: 'pointer'}} onChange={handleChange} name='payment_type' value='COD' type='radio' />
                  <Text>COD</Text>
                </Flex>
                <Flex gap='3'>
                  <input style={{width: '20px', cursor: 'pointer'}} onChange={handleChange} name='payment_type' value='card' type='radio' />
                  <Text>card</Text>
                </Flex>
              </Flex>
            </Box>

            <Box flexDirection='column' gap='3' display={cardDetails.payment_type=="card"? 'flex' : 'none'}>              
                <Text>Enter your Card Details: </Text>
                <Box>
                  <Input onChange={handleChange} minLength='16' maxLength='16' type='number' name='card_number' placeholder='16 digit card number' />
                </Box>
                <Box>
                  <Input onChange={handleChange} type='text' name='expiry_date' placeholder='Expiry Date' />
                </Box>
                <Box>
                  <Input onChange={handleChange} type='text' name='cvv' placeholder='CVV' />
                </Box>                            
            </Box>   

            <Box>
              {address? <Button isLoading={loading} mt='3' variant='#000' bgColor='#000' type='submit'>{cardDetails.payment_type=="card"? 'Pay' : 'Continue'}</Button> : <Address/>}           
            </Box>
          </form>
        </Box>

        <Box color='#fff'>
          <Box backdropFilter={'blur(10px)'} padding='10' borderRadius='15px'>
            <Text fontSize='x-large' fontWeight='bold' color='greenyellow'>Your Grand Total: <span style={{color:'#fff'}}>₹ {totalPrice}</span> </Text>
            <Text>Powored by Electric.</Text>
          </Box>

          {address && <Box mt='5' backdropFilter={'blur(10px)'} fontWeight='bold' padding='10' borderRadius='15px'>
              <Text fontSize='x-large'>Shipping Details:</Text>
              <Text>Full Name: {address.name}</Text>
              <Text>Landmark: {address.locality}</Text>
              <Text>State: {address.state}</Text>
              <Text>Postal: {address.postalcode}</Text>
              <Text>Contact: {address.mobile}</Text>
              <Text>Address: At-{address.address}</Text>
              <Text mt='3'>Delivered to this address by Wednesday</Text>
          </Box>}          
        </Box>
      </Flex>


      <Footer mt={'10'}/>
    </Box>
  )
}
