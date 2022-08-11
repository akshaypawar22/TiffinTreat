import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HOME-COOKED FOOD THAT MAKES YOU GO WOWW.</h1>
      <p className={styles.desc}>
      “Food brings people together on many different levels. 
      It’s nourishment of the soul and body; it’s truly love.”
      – Giada De Laurentiis
      </p>
      <div className={styles.wrapper}>
        {/* productlist is json object with all products but with map function it
        passing product one by one to productcard.jsx as props and displying product card */}
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;