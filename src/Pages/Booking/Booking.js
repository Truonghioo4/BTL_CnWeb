import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Booking.module.css'; // Nhớ tạo file này

const Booking = () => {
    const [bookedRooms, setBookedRooms] = useState([]);

    useEffect(() => {
        const fetchBookedRooms = async () => {
            try {
                const response = await axios.get("http://localhost:3000/booking");
                setBookedRooms(response.data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách phòng đã đặt:", error);
            }
        };
        fetchBookedRooms(); 
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/booking/?id=${id}`);
            setBookedRooms(prevRooms => prevRooms.filter(room => room.id !== id));
        } catch (error) {
            console.error("Lỗi khi xóa phòng:", error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Danh Sách Phòng Đã Đặt</h2>
            <ul className={styles.bookedList}>
                {bookedRooms.map(room => (
                    <li key={room.id} className={styles.bookedItem}>
                        <h3 className={styles.roomName}>{room.Name}</h3>
                        <p className={styles.roomDetails}>{room.Address}</p>
                        <p className={styles.roomPrice}>Giá: {room.Price}$</p>
                        <button className={styles.deleteButton} onClick={() => handleDelete(room.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Booking;
