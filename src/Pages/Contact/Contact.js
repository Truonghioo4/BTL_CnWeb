import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Thông Tin Liên Hệ</h1>
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> dinhtruonghioo4@gmail.com</p>
        <p><strong>Điện Thoại:</strong> 0359822971</p>
        <p><strong>Địa Chỉ:</strong> Quế Võ, Bắc Ninh</p>
        <p><strong>Giờ Làm Việc:</strong> Thứ 2 - Thứ 6: 9:00 - 17:00</p>
      </div>

      <h2>Gửi Tin Nhắn</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Tên của bạn" required />
        <input type="email" placeholder="Email của bạn" required />
        <textarea placeholder="Nội dung tin nhắn" required></textarea>
        <button type="submit">Gửi</button>
      </form>

      <h2>Theo Dõi Chúng Tôi</h2>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;
