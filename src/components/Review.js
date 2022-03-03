import React, { useState } from "react";
import "./../data";
import "./Review.css";
import {
  TiStar,
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "react-icons/ti";
import reviews from "./../data";

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      console.log(reviews.length - 1 + " length");
      return 0;
    }
    if (number < 0) {
      console.log(reviews.length - 1 + " Back");
      return reviews.length - 1;
    }
    return number;
  };

  const randomNumber = () => {
    let random = Math.floor(Math.random() * reviews.length);
    console.log(random + " Number random");
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      console.log(newIndex + " index");
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <TiStar />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <TiChevronLeftOutline />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <TiChevronRightOutline />
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>
        Suprise me
      </button>
    </article>
  );
};
