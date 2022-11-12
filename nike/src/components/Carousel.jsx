import React, { useState, useEffect } from "react";
import { truncate } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { HiHashtag } from "react-icons/hi";
import axios from "axios";

//
export const Carousel = () => {
  const [media1000] = useMediaQuery("(max-width: 1000px)");
  const [media700] = useMediaQuery("(max-width: 700px)");
  const [stories, setStories] = useState([]);

  const getStories = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/stories`)
    .then((res) => {
      // console.log(res.data.msg);
      setStories(res.data.msg);
    });
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <Box w="95%" m="auto">
      <Swiper        
        speed={500}
        slidesPerView={media700? 1 : media1000? 3 : 4}       
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {stories.map((el, i) => (
          <SwiperSlide key={i}>
            <Box bgColor="#fcfc" borderRadius="10">
              <Image borderRadius="10" src={el.img} alt="" />
              <Box p="5">
                <Flex justify="space-evenly" fontWeight="bold">
                  <Flex align="center" gap="1">
                    <AiFillHeart style={{ color: "red" }} />
                    <Text>{el.like}</Text>
                  </Flex>
                  <Flex align="center">
                    <AiOutlineClockCircle />
                    <Text>{el.time}</Text>
                  </Flex>
                  <Flex align="center" color="blue">
                    <HiHashtag />
                    <Text>{el.by}</Text>
                  </Flex>
                </Flex>
                <Text fontWeight="bold">{el.title}</Text>
                <Text>{truncate(el.text, { length: 105 })}</Text>
                <Button
                  variant="#000"
                  w="100%"
                  mt="2"
                  color="#fff"
                  bgColor="black"
                >
                  READ MORE
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
