import React, { useState } from 'react'
import axios from 'axios';
import styles from "../styles/Sell.module.css";
import Image from "next/image";
import ProductCard from '../components/ProductCard';
import AddButton from '../components/AddButton';
import Add from '../components/Add';

export default function sell({ product }) {
  const [close, setClose] = useState(true);
  const sellProduct = product.filter(function (e) {
    return e.type === "SELL";
  });
  return (
    <div>
      {<AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />}
      <div className={styles.container}>
        <h1 className={styles.title}>HUNGRY?? ORDER NOW!!</h1>
        <p className={styles.desc}>
          " There is no LOVE sincerer than the love of food. "
          - George Bernard Shaw
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
