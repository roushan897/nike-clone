import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Featured = ({image, dir}) => {
   
  return (
    <Flex direction={['column', 'column',`${dir}`]} justify='space-between' align='center' color='#fff' w='90%' m='auto' my={['35','30','40']}>
      <Box w={['90%', '90%','45%']} textAlign={['center','center','left']} >
        <Text fontSize='40' fontWeight='bold'>FEATURED</Text>
        <Text color='skyblue' fontSize='20' fontWeight='bold'>NIKE SNEAKERS AIR LANCING SHOES</Text>
        <Text mt='5'>The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</Text>
        <Button mt='5' color='#000'>Explore More</Button>
      </Box>
      <Box w={['80%','80%','40%']}>
        <Image
          _hover={{ transform: "rotate(-10deg)", cursor: "pointer" }}
          transition=".5s"
          transform="rotate(-20deg)"
          src={image} alt='' />
      </Box>
    </Flex>
  )
}

