import React from "react";
import "../styles/Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Footer() {
  return (
    <div className="footer">
      <div className="footerText">
        <p>
          {" "}
          &copy; 2022. Made with <FavoriteIcon fontSize="small" id="icon" /> By
          Victor{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
