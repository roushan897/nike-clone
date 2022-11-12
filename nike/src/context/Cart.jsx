import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const CartContextProvider = createContext();

export const CartProvider = ({ children }) => {  
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const getCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    setCart(cartData);
  }

  const showToast = (message, status) => {
    toast({
      title: `${message}`,
      position: 'top',
      isClosable: true,
      status: status
    })
  }

  const addCart = (data) => {  
    let newData = JSON.stringify([...cart,{...data, count: 1}]);
    let isthere = cart.find((el)=> el._id==data._id);
    if(isthere===undefined){
      localStorage.setItem('cartData', newData);
      getCart();
      showToast('added to cart.', 'success')
    }else{
      showToast('already added to cart.', 'error')
    }
  };

  const removeCart = (id) => {    
    if(cart.length==1) localStorage.removeItem('cartData');

    let newData = cart.filter((el)=> el._id != id);    
    localStorage.setItem('cartData', JSON.stringify(newData));
    getCart();
    showToast('removed from cart.', 'error');
  };

  const removeAll = () => {
    localStorage.removeItem('cartData');
    getCart();
  }

  const countCart = (data) => {   
    if(data.type=="dec" && data.count==0){
      removeCart(data.id);
    }else if(data.count==6){
      showToast('reached max limit.', 'error');
    }else{
      let newData = cart.map((el)=>{
        if(el._id==data.id){        
           el.count = data.count;
           return el;
        }else{
          return el;
        }
      })
      localStorage.setItem('cartData', JSON.stringify(newData));
      getCart();    
      showToast(`${data.type=="inc"? "count incremented": "count decremented"}`, 'success');
    }   
  };

  useEffect(()=>{
    getCart();
  },[]);

  return (
    <CartContextProvider.Provider value={{cart, countCart, addCart, removeCart, removeAll }}>
      {children}
    </CartContextProvider.Provider>
  );
};
