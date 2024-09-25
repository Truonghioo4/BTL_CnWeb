import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DINCHAN</div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Trang Chủ</Link> 
          </li>
          <li className={styles.navItem}>
            <Link to="/booking" className={styles.navLink}>Booking</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>Liên Hệ</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.loginButton}>
      <Link to="/" className={styles.navLink}>Đăng Nhập</Link>
      </button>
    </header>
  );
};

export default Header;
