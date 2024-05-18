import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Hi5<span>store</span>
      </h2>
    </Link>
  </div>
);

const activeLinkStyle = ({ isActive }) => (isActive ? styles.active : "");

const Header = ({ cartItems = 0 }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);

  useEffect(() => {
    const fixNavbar = () => {
      if (window.scrollY > 50) {
        setScrollPage(true);
      } else {
        setScrollPage(false);
      }
    };

    window.addEventListener("scroll", fixNavbar);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", fixNavbar);
    };
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);
  const hideMenu = () => setShowMenu(false);

  const cart = (
    <span className={styles.cart}>
      <NavLink to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>{cartItems}</p>
      </NavLink>
    </span>
  );

  return (
    <header className={scrollPage ? styles.fixed : ""}>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/shop" className={activeLinkStyle}>
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to="login" className={activeLinkStyle}>
                Login
              </NavLink>
              <NavLink to="register" className={activeLinkStyle}>
                Register
              </NavLink>
              <NavLink to="order-history" className={activeLinkStyle}>
                My Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
