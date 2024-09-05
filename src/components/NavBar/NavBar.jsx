"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const pathname = usePathname();

  const isLink = (path) =>
    pathname === path ? styles.navItemActive : styles.navItem;

  return (
    <nav className={styles.Navigation}>
      <div className="container">
        <div className={styles.navBar}>
          <img className={styles.logo} src="/img/Logo.png" alt="logo" />
          <div className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={isLink("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movies" className={isLink("/movies")}>
                  Movies & Shows
                </Link>
              </li>
              <li>
                <Link href="/support" className={isLink("/support")}>
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/subscriptions"
                  className={isLink("/subscriptions")}
                >
                  Subscriptions
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.searchDiv}>
            <button>
              <img src="/img/icons/search.png" alt="search" />
            </button>
            <button>
              <img src="/img/icons/colocol.png" alt="colocol" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
