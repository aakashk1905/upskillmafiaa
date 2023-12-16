import React from "react";
import "./Discover.css";
import disc1 from "../Assests/disc1.svg";
import disc2 from "../Assests/disc2.svg";
import disc3 from "../Assests/disc3.svg";
const Discover = () => {
  return (
    <div className="disc-cont">
      <div className="disc-head-cont">
        <div className="disc-sub-head">Your journey begins here</div>
        <div className="disc-head">discover the virtual campus </div>
      </div>
      <div className="disc-main-cont">
        <div className="disc-pts-cont">
          <div className="disc-pts">
            <div className="disc-abs-num">1</div>
            <img src={disc1} alt="disc1" />
            <span>
              join the campus, meet your peers and kickstart your Design
              journey!!
            </span>
          </div>
          <div className="disc-pts">
            <div className="disc-abs-num">2</div>
            <img src={disc2} alt="disc1" />
            <span>
              Collaborate and learn UI/UX, crafting product case studies
              together.
            </span>
          </div>
          <div className="disc-pts">
            <div className="disc-abs-num">3</div>
            <img src={disc3} alt="disc1" />
            <span>
              Compete with campus mates, showcasing your skills and aiming for
              big wins.
            </span>
          </div>
        </div>
        <div className="disc-vid">
          {/* <img src={vid} alt="vid" /> */}
          <div className="disc-abs-lebel">Watch campus preview here</div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
