import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.motto}>
        “IF YOU CANNOT FEED A HUNDRED PEOPLE, THEN FEED JUST ONE.” –Mother Teresa
      </h2>
      <div className={styles.item}>
        <div>
          <div className={styles.card}>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR DONATION CENTERS</h1>
            <p className={styles.text}>
              1654 R. Hill Road #304.
              <br /> Dadar, 400014
              <br /> (602) 867-1010
            </p>
            <p className={styles.text}>
              2356 K.L Rd #235.
              <br /> Thane, 400604
              <br /> (602) 867-1011
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY UNTIL FRIDAY
              <br /> 9:00 – 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00 – 24:00
            </p>
          </div>
        </div>
        <div className={styles.care}>
          <h1 className={styles.title}>CUSTOMER CARE</h1>
          <ul className={styles.unorderlist}>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Return & Exchanges</li>
            <li>Shipping & Handling</li>
            <li>Damaged or Defected Items</li>
            <li>Order cancellation</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className={styles.social_list}>
        <a href="https://www.youtube.com/c/jamesqquick">
          <img src="/image/instagram.png" alt="" className={styles.social}></img>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick">
          <img src="/image/facebook.png" alt="" className={styles.social}></img>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick">
          <img src="/image/linkedin.png" alt="" className={styles.social}></img>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick">
          <img src="/image/twitter.png" alt="" className={styles.social}></img>
        </a>
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.645933716304!2d72.83354047404447!3d19.123182650491923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1685160915256!5m2!1sen!2sin"
          width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Footer;