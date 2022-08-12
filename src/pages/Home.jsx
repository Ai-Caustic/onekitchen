import React from "react";
import "../styles/Home.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Link } from "react-router-dom";
import foodImage from "../assets/Food.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${foodImage})` }}>
      <div className="headerContainer">
        <h1>
          <LocationOnIcon id="lo" />
          On Tap Bar and Lounge, Opposite Gateway Plaza
        </h1>
        <p>
          <LocationCityIcon id="lo" />
          Thika, Kenya
        </p>
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
