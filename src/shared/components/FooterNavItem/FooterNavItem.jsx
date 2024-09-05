'use client'


import styles from "./FooterNavItem.module.css";
import Link from "next/link";


const FooterNavItem = ({ title, img, ...props}) => {
  return (
    <div className={styles.footerNavItem}>
      <h3>{ title }</h3>
      <div className={styles.divNav}>
        <Link className={styles.link} href={"#"}>
          {props.link1}
        </Link>
        <Link className={styles.link} href={"#"}>
          {props.link2}
        </Link>
        <Link className={styles.link} href={"#"}>
          {props.link3}
        </Link>
        <Link className={styles.link} href={"#"}>
          {props.link4}
        </Link>
      </div>
      { 
        img ? <div className={styles.divIcon}>
        <a href="#">
          <img src="/img/connect/fc.png" alt="fc" />
        </a>
        <a href="#">
          <img src="/img/connect/tw.png" alt="fc" />
        </a>
        <a href="#">
          <img src="/img/connect/lk.png" alt="fc" />
        </a>
      </div> 
      : ''
      }
    </div>
  );
};

export default FooterNavItem;
