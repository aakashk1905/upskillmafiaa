import React from "react";
import "./Uhackathon.css";
import hack1 from "../Assests/hack1.svg";
import hack2 from "../Assests/hack2.svg";
import hack3 from "../Assests/hack3.svg";
const Uhackathon = () => {
  return (
    <div className="container1 disc-cont">
      <div className="hack-head-cont">
        <div className="hack-sub-head">Showoff Your skills in our Monthly</div>
        <div className="hack-head">48-Hour Design Hackathon!! </div>
      </div>
      <div className="hack-main-cont">
        <div className="hack-card">
          <img src={hack1} alt="hack1" />

          <div className="hack-card-text">
            Boost your portfolio by solving real world problems
          </div>
        </div>
        <div className="hack-card">
          <img src={hack2} alt="hack1" />

          <div className="hack-card-text">
            Participate with your Design Team & craft innovative solutions
          </div>
        </div>
        <div className="hack-card">
          <img src={hack3} alt="hack1" />

          <div className="hack-card-text">
            Win cash prize of ₹6000 & get your work featured in our hall of fame
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uhackathon;
