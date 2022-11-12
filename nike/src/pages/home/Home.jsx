import React from 'react';
import styles from './home.module.css';

import { Navbar } from '../../components/navbar/Navbar';
import { ProductTable } from '../../components/ProductTable';
import { Hero } from '../../components/hero/Hero';
import { Featured } from '../../components/Featured';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';


export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <Hero/>      
      <ProductTable limit={'3'} hello={"true"} />
      <Featured {...{image: 'https://nike-store-jsstack.vercel.app/assets/nike-air-red.70d9fd5b.png', dir: 'row'}}/>
      <ProductTable limit={'12'} hello={''}/>
      <Featured {...{image: 'https://i.postimg.cc/7h5F89GL/product2.png', dir: 'row-reverse'}}/>
      <Carousel/>
      <Footer mt={'10'}/>
    </div>
  )
};

