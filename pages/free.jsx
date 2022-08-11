import React, { useState } from 'react'
import axios from 'axios';
import styles from "../styles/Free.module.css";
import Image from "next/image";
import ProductCard from '../components/ProductCard';
import AddButton from '../components/AddButton';
import Add from '../components/Add';

export default function free({ product }) {
  const [close, setClose] = useState(true);
  const sellProduct = product.filter(function (e) {
    return e.type === "FREE";
  });
  return (
    <div>
      {<AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />}
      <div className={styles.container}>
        <h1 className={styles.title}>DON'T BE RUDE, DONATE SOME FOOD!</h1>
        <p className={styles.desc}>
          “In many places in the developed world, we eat or waste probably twice as much food calories as we really need.
          We’re wasteful of food.
          We ship all over the world.
          We’re not releasing that generating the energy to ship the food around the world is also ruining our climate, Lets <b>THINK EAT AND SAVE</b> The Food"
        </p>
        <div className={styles.wrapper}>
          {sellProduct.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    `http://localhost:3000/api/products`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

// { product.type ==='FREE' ? <span className={styles.price}>${0 * product.quantity}</span>
//                   : <span className={styles.price}>${product.price * product.quantity}</span>}