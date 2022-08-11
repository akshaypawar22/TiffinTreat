import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import SellList from "./SellList";
import FreeList from "./FreeList";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.cart.customer);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Welcome {user}</div>
          <div className={styles.text}>ORDER NOW!</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/donate" passHref>
          <li className={styles.listItem}>DONATE</li>
        </Link>
        <Link href="/admin" passHref>
          <li className={styles.listItem}>PRODUCTS</li>
        </Link >
        <Link href="/sell" passHref>
          <li className={styles.listItem}>SELL</li>
        </Link>
        <Link href="/">
          <Image href="/" src="/image/logo.png" alt="" width="100px" height="90px" />
        </Link> 
        <Link href="/free" passHref>
          <li className={styles.listItem}>FREE</li>
        </Link>
        <Link href="/about" passHref>
          <li className={styles.listItem}>ABOUT</li>
        </Link>
        <Link href="/contact" passHref>
          <li className={styles.listItem}>CONTACT</li>
        </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image  src="/image/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;