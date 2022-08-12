import React from "react";
import "../styles/Menu.css";
import MainMenu from "../components/MainMenu";
import Accompaniments from "../components/Accompaniments";
import Bitings from "../components/Bitings";
import { Mainmenu } from "../menuitems/Mainmenu";
import { Accompaniments as sides } from "../menuitems/Accompaniments";
import { Bitings as bites } from "../menuitems/Bitings";
import menuImage from "../assets/MenuBackground4.jpg";
import menuImage2 from "../assets/MenuBackground.jpg";
import menuImage3 from "../assets/Meat.jpg";


function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${menuImage})` }}>
      <div
        className="menuintro"
        style={{ backgroundImage: `url(${menuImage2})` }}
      >
        <p>Our Mouth-watering Delicacies</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="heading">Main Menu</h1>
            {Mainmenu.map((menuItem, key) => {
              return (
                <MainMenu
                  key={key}
                  name={menuItem.name}
                  price={menuItem.price}
                />
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1 id="heading">Accompaniments</h1>
            {sides.map((accompaniments, key) => {
              return (
                <Accompaniments
                  key={key}
                  name={accompaniments.name}
                  price={accompaniments.price}
                />
              );
            })}
          </div>
          <div className="col-md-6">
            <h1 id="heading">Bitings</h1>
            {bites.map((bite, key) => {
              return <Bitings key={key} name={bite.name} price={bite.price} />;
            })}
          </div>
        </div>
        <div className="hr">
          <hr />
          <p>How Much Meat Can You Handle?</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Menu;
