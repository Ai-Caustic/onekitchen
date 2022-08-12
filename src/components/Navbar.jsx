import React, { useState } from "react";
import Logo from "../assets/onekitchenlogo.png";
import { Link } from "react-router-dom";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} className="logo"></img>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu</Link>
        <button onClick={toggleNavbar}>
          <ViewStreamIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
