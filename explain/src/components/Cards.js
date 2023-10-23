import React from "react";
import CardItem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Meet The Team
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Harshit.jpg"
              text="Back-end Developer"
              label="Harshit Suri"
              path="/services"
            />
            <CardItem
              src="images/shub.jpg"
              text="Backend Developer"
              label="Shubhankar Parashar"
              path="/services"
            />
            <CardItem
              src="/images/img-7.JPG"
              text="Front end Developer"
              label="Jody Mustafa"
              path="/services"
            />
            <CardItem
              src="images/Adarsh.jpg"
              text="Front end Developer"
              label="Adarsh Kessani"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
