import React from "react";
import "./Elevate.css";
import elev1 from "../Assests/elev1.svg";
import elev2 from "../Assests/elev2.svg";
const Elevate = () => {
  return (
    <div className="container1 elev-cont">
      <div className="elev-head-cont">
        <div className="elev-head">Elevate your Journey</div>
        <div className="elev-sub-head">
          Our platform is all about interactivity and gamification, <br />
          making the experience engaging and fun.
        </div>
      </div>
      <div className="elev-main-cont">
        <div className="elev-card">
          <img src={elev1} alt="elev1" />
          <div className="elev-card-head"> Stay Motivated</div>
          <div className="elev-card-text">
            Seamlessly manage your assignment submissions and keep track of your
            daily progress!
          </div>
        </div>
        <div className="elev-card">
          <img src={elev2} alt="elev1" />
          <div className="elev-card-head">Get Design challenges </div>
          <div className="elev-card-text">
          Learn and improve your design skills faster with our daily and weekly UI Design Challenges 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
