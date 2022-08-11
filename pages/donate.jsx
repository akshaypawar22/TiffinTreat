import React from "react";
import styles from "../styles/donate.module.css";
import Image from "next/image";


export default function donate() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.imgContainer} >
                    <Image src="/image/D1.png" layout="fill" objectFit="contain" className={styles.imgC} />
                </div>
                <button className={styles.Don}>
                    <a href="https://rzp.io/l/8mWzDu4P" target="_blank" class="link">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        DONATE
                    </a></button>
            </div>
        </div>
    );
}
