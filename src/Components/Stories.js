import React from "react";
import "./Stories.css";
import "./Hall.css";
import Carousel from "./Carousel";
const Stories = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  return (
    <div className="st-cont">
      <div className="st-head-cont">
        <div className="st-sub-head">What Our Students Say</div>
        <div className="st-head">Community Stories </div>
      </div>
      <div className="st-car-cont">
        <Carousel items={items} />
      </div>
      <div className="st-cta-cont">
        <div className="st-head">Join the Community for Free</div>
        <div className="st-sub-head">
          Sign up to access free courses, events, build
          <br /> connections and unlock your design potential.
        </div>
        <a
          href="https://chat.whatsapp.com/Dk34YejxXMoEtJWTTZd4LB"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hall-cta">Join Now For Free</div>
        </a>
      </div>
    </div>
  );
};

export default Stories;
