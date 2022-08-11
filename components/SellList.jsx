import styles from "../styles/Sell.module.css";
import ProductCard from "./ProductCard"
import ProductList from "./ProductList";

const SellList = ({productList}) => {
    const sellProduct = productList.filter(function(e){
        return e.type==="SELL";
    });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {sellProduct.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SellList;