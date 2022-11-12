import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const WishlistContextProvider = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const toast = useToast();

  const showToast = (message, status) => {
    toast({
      title: `${message}`,
      position: 'top',
      isClosable: true,
      status: status
    })
  }

  const getWishlist = () => {
    const wishData = JSON.parse(localStorage.getItem('wishlist_nike')) || [];
    setWishlist(wishData);
  }

  const addWish = (data) => {   
    let isthere = wishlist.find((el)=> el._id==data._id);
    if(isthere===undefined){
      let newData = JSON.stringify([...wishlist,data]);
      localStorage.setItem('wishlist_nike', newData);
      getWishlist();
      showToast('added to wishlist.', 'success')
    }else{
      showToast('already in your wishlist.', 'error')
    }
  };

  const removeWish = (id) => {    
    if(wishlist.length==1) localStorage.removeItem('wishlist_nike');

    let newData = wishlist.filter((el)=> el._id != id);    
    localStorage.setItem('wishlist_nike', JSON.stringify(newData));
    getWishlist();
    showToast('shoes removed from wishlist.', 'error');
  };

  useEffect(()=>{
    getWishlist();
  },[]);  

  return (
    <WishlistContextProvider.Provider value={{ wishlist, addWish, removeWish }}>
      {children}
    </WishlistContextProvider.Provider>
  );
};
