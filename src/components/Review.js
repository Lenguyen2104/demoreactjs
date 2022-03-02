import React, { useState } from "react";
import people from "./../data";
import "./Review.css";

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
    </article>
  );
};
