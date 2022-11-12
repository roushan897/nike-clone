import React from 'react';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export const Skelton = () => {
  return (
    <Box bgColor='#fcfc' h='40' borderRadius='10' p='10'>       
           <SkeletonText w='80%' m='auto' />   
           <SkeletonCircle transform='rotate(-20deg)' h='20' w='50%' m='auto' mt='4'/>        
    </Box>
  )
};
