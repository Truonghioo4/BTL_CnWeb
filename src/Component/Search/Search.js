import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Search.module.css';

const Search = ({ setFilteredHotels }) => {
    const [hotels, setHotels] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/hotel")
            .then(res => {
                setHotels(res.data);
            });
    }, []);

    const handleSearch = (event) => {
      const value = event.target.value
      setSearchTerm(value);
      const filtered = hotels.filter(hotel =>
          hotel.Name.toLowerCase().includes(value.toLowerCase()) ||
          hotel.Address.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredHotels(filtered);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Tìm kiếm khách sạn..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchInput}
            />
        </div>
    );
}

export default Search;
