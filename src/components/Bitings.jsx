import React from "react";
import "../styles/Menu.css";

function Bitings({ name, price }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>{name}</h3>
        </div>
        <div className="col-md-6">
          <p>{price} </p>
        </div>
      </div>
    </div>
  );
}

export default Bitings;
