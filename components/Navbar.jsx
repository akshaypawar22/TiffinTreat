import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import SellList from "./SellList";
import FreeList from "./FreeList";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { update } from "../redux/cartSlice";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const users = useSelector((state) => state.cart.customer);
  // const [customer, setCustomer] = useState("User");
  // const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const Name = "";
  if (user == null) {
    Name = "User";
  } else {
    Name = user.nickname
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Welcome {Name}</div>
          <div className={styles.text}>ORDER NOW!</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/plans" passHref>
            <li className={styles.listItem}>PLANS</li>
          </Link>
          <Link href="/admin" passHref>
            <li className={styles.listItem}>PRODUCT</li>
          </Link >
          <Link href="/sell" passHref>
            <li className={styles.listItem}>ORDER</li>
          </Link>
          <Link href="/">
            <Image href="/" src="/image/logo.png " alt="" width="85px" height="85px" />
          </Link>
          <Link href="/free" passHref>
            <li className={styles.listItem}>FREE</li>
          </Link>
          <Link href="/about" passHref>
            <li className={styles.listItem}>ABOUT</li>
          </Link>
          <li className={styles.listItem}>
            {
              user ?
                (<a href="/api/auth/logout">LOGOUT</a>)
                :
                (<a href="/api/auth/login">LOGIN</a>)
            }
          </li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/image/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;