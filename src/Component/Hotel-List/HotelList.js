import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Hotel.module.css';
import { Link } from 'react-router-dom';
const HotelList = ({ filteredHotels }) => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/hotel")
            .then(res => {
                setHotels(res.data);
            });
    }, []);
    const handleBookRoom = (hotel) => {
      axios.post("http://localhost:3000/booking", hotel)
          .then(() => {
              alert('Đặt phòng thành công!');
          })
          .catch(error => {
              console.error("Có lỗi xảy ra:", error);
          });
    };
    // Nếu có khách sạn đã lọc, sử dụng chúng; nếu không, sử dụng tất cả khách sạn
    const displayHotels = filteredHotels.length > 0 ? filteredHotels : hotels;

    return (
        <div>
            <div className={styles.hotelList}>
                {displayHotels.map(hotel => (
                    <div key={hotel.id} className={styles.hotelItem}>
                        <img src={hotel.img_url} alt={hotel.Name} className={styles.hotelImage} />
                        <div className={styles.hotelDetails}>
                            <h2 className={styles.hotelName}>{hotel.Name}</h2>
                            <p className={styles.hotelAddress}>{hotel.Address}</p>
                            <p className={styles.hotelRooms}>Phòng Trống: {hotel.Available_rooms}</p>
                            <p className={styles.hotelRates}>Đánh Giá: {hotel.Rates}</p>
                            <p className={styles.hotelRates}>Giá: {hotel.Price}$/day</p>
                            <Link to={`/booking`} className={styles.bookButton} onClick={() => handleBookRoom(hotel)}>
                              Đặt Phòng
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelList;

