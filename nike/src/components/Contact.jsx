import React from "react";
import { IoMdContact } from 'react-icons/io';
import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export const Contact = () => {
  const { logout, user } = useAuth0();

  return (
    <Box>
      <Menu>
        <MenuButton colorScheme='transparent' as={Button}>
          <Image w={['', '80%', '40%']} borderRadius='50%' src={user.picture} alt='' />
        </MenuButton>
        <MenuList bgColor='#000'>
          <MenuItem _hover={{backgroundColor: 'transparent'}}>Hi, {user.given_name}</MenuItem>
          <MenuItem _hover={{backgroundColor: 'transparent'}}>{user.email}</MenuItem>
          <MenuItem onClick={()=> logout()} _hover={{backgroundColor: 'transparent'}}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
