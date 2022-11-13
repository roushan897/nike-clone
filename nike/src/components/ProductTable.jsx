import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Tag,
  Spacer,
} from "@chakra-ui/react";
import { Cards } from "./Cards";
import axios from "axios";
import { useEffect } from "react";
import { Skelton } from "./Skelton";

export const ProductTable = ({hello, limit, shoesData, reCart}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/products?_limit=${limit}`)
    .then((res)=>{
      // console.log(res)
      setData(res.data.msg);
      setLoading(false);
    })
  }
  
  useEffect(()=>{
    getData();
  },[]);

  return (
    <SimpleGrid
      mt='20'
      mb='10'
      px="10"
      columns={hello? [1, 2, 3] : [1, 2, 3, 4]}      
      gap="7"      
    >
      {loading? Array(4).fill(0).map((el,i)=> <Skelton key={i} />)  
       : shoesData !== undefined ? shoesData.map((el,i) => (
            <Cards key={el._id} {...{el: el, hello: hello, reCart: reCart}} />        
         ))
       : data?.map((el,i) => (
        <Cards key={el._id} {...{el: el, hello: hello}} />        
       ))}
    </SimpleGrid>
  );
};

