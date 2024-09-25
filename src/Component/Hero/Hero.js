import React from 'react';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Chào Mừng Đến Với Khách Sạn Của Chúng Tôi</h1>
        <p className={styles.heroSubtitle}>Khám Phá Các Phòng Khách Sạn Tuyệt Vời Với Giá Cả Hợp Lý</p>
        <button className={styles.heroButton}>Đặt Phòng Ngay</button>
      </div>
    </div>
  );
};

export default Hero;
