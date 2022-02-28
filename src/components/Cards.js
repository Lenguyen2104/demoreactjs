import CardItem from "./CardItem";
import React from "react";
import "./Cards.css";

function Cards() {
  console.log("Cardsjs");
  return (
    <div className="cards">
      <h1>Hello every one</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Sending positive energy to everyone"
              label="Start nows"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Sending positive energy to everyone 1"
              label="Start nows"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Sending positive energy to everyone 2"
              label="Start nows"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Sending positive energy to everyone 3"
              label="Start nows"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Sending positive energy to everyone 4"
              label="Start nows"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
