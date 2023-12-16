import React from "react";
import "./Hall.css";
import hall1 from "../Assests/hall1.svg";
import hall2 from "../Assests/hall2.svg";
import hall3 from "../Assests/hall3.svg";
import winners from "../Assests/winners.png";
import second from "../Assests/second.png";
import third from "../Assests/third.png";
const Hall = () => {
  return (
    <div className="container1 disc-cont">
      <div className="hall-head-cont">
        <div className="hall-sub-head">explore student’s case studies</div>
        <div className="hall-head">Our Hall Of Fame</div>
      </div>
      <div className="hall-main-cont">
        <div className="hall-card">
          <img src={hall1} alt="hall1" />
          <img src={winners} alt="hall1" className="hall-img-abs" />

          <div className="hall-card-text">
            Learning Management system by{" "}
            <b style={{ color: "#51B846" }}> Team UXArchives</b>
          </div>
          <div className="hall-card-names">Raghav | Janvi | Ishita</div>
        </div>
        <div className="hall-card">
          <img src={hall2} alt="hall1" />
          <img src={second} alt="hall1" className="hall-img-abs" />

          <div className="hall-card-text">
            Learning Management system by{" "}
            <b style={{ color: "#51B846" }}>Team UXwarriors</b>
          </div>
          <div className="hall-card-names">Raghav | Janvi | Ishita</div>
        </div>
        <div className="hall-card">
          <img src={hall3} alt="hall1" />
          <img src={third} alt="hall1" className="hall-img-abs" />

          <div className="hall-card-text">
            A Study Buddy App by{" "}
            <b style={{ color: "#51B846" }}>Team UXArchives</b>
          </div>
          <div className="hall-card-names">Raghav | Janvi | Ishita</div>
        </div>
      </div>
      <div className="hall-dots">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#51B846" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#51B846" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#51B846" />
        </svg>
      </div>
      <div className="hall-cta-cont">
        <div className="hall-cta-text">
          Ready for an Ultimate design challenge?{" "}
          <b style={{ color: "#FFDF8B" }}>Join upcoming Hackathon</b>
        </div>
        <a href="/hackathon" target="_blank" rel="noreferrer">
          <div className="hall-cta">Register Now</div>{" "}
        </a>
      </div>
    </div>
  );
};

export default Hall;
