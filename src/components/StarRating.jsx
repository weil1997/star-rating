import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ totalStars = 5 }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [rating, setRating] = useState(0);

  const getStarColor = (index) => {
    if (index < rating) {
      return "gold";
    } else if (index < hoveredStars) {
      return "silver";
    } else {
      return "gray";
    }
  };

  return (
    <div className="stars-container">
      <div className="stars-row">
        {[...Array(totalStars)].map((_, i) => (
          <span
            key={i}
            className="star"
            onMouseEnter={() => setHoveredStars(i + 1)}
            onMouseLeave={() => setHoveredStars(0)}
            onClick={() => setRating(i + 1)}
            style={{ color: getStarColor(i) }}
          >
            ★
          </span>
        ))}
      </div>
      <span className="star" onClick={() => setRating(1)}></span>
      <span className="star" onClick={() => setRating(2)}></span>
      <span className="star" onClick={() => setRating(3)}></span>
      <span className="star" onClick={() => setRating(4)}></span>
      <span className="star" onClick={() => setRating(5)}></span>

      <div className="rating-message">
        {rating === 5 &&
          "Utmärkt vi är glada att höra en sån positiv upplevelse. Tack för att du valde vår plattform "}
        {rating === 4 &&
          "Tack för din positiva feedback! Vi är glada att veta att du hade en positiv upplevelse."}
        {rating === 3 &&
          "Tack för feedbacken! Vi är ledsna att höra att din upplevelse inte var perfekt. Vi skulle gärna höra mer om dina bekymmer för att se hur vi kan förbättra."}
        {rating === 2 &&
          "Vi ber om ursäkt för olägenheten du upplevde. Vi uppskattar din feedback och skulle vilja arbeta med dig för att adressera eventuella problem."}
        {rating === 1 &&
          "Vi är ledsna att höra att du hade en dålig upplevelse. Vi skulle vilja lära oss mer om vad som hände och hur vi kan göra saker rätt."}
      </div>
    </div>
  );
};

export default StarRating;
