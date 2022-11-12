import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

export const Address = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [address, setAddress] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const {name, value} = e.target;
      setAddress({
        ...address, 
        [name]: value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('nike_address', JSON.stringify(address));
      setLoading(true);
      setTimeout(()=> {
        setLoading(false);
        onClose();
      }, 1000)
    }

    return (
      <>
        <Button mt='3' variant='#000' bgColor='#000' color='#fff' onClick={onOpen}>Add Address</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backdropFilter={'blur(25px)'} bgColor='transparent' color='#fff'>
            <ModalHeader>Enter your name and address.</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <Box>
                       <Input onChange={handleChange} name='name' type='text' placeholder='Full Name' required/>
                    </Box>
                    <Box>
                       <Input onChange={handleChange} name='locality' type='text' placeholder='Landmark/near by' required/>
                    </Box>
                    <Box>
                      <Input onChange={handleChange} name='state' type='text' placeholder='State' required/>
                    </Box>
                    <Box>
                      <Input onChange={handleChange} name='postalcode' type='number' placeholder='Postal Code' required/>
                    </Box>
                    <Box>
                      <Input maxLength='10' minLenmaxLength='10' onChange={handleChange} name='mobile' type='number' placeholder='Mobile number' required/>
                    </Box>
                    <Box>
                      <Textarea onChange={handleChange} name='address' placeholder='Full Address' required/>
                    </Box>
                    <Box>
                      <Button isLoading={loading} variant='#000' bgColor='#000' type='submit'>Update Address</Button>
                    </Box>
                </form>              
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
