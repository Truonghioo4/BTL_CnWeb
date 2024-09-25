import React, {useState, useEffect} from "react";
// import axios from "axios";
import Hero from "../Component/Hero/Hero";
import HotelList from "../Component/Hotel-List/HotelList";
import Search from "../Component/Search/Search";
const Home = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  return (
    <div className="home">
      <Hero />
      <Search setFilteredHotels={setFilteredHotels} />
      <HotelList filteredHotels={filteredHotels} />

    </div>
  );
};
export default Home