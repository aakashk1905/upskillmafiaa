import React from "react";
import "./Pros.css";
import pros1 from "../Assests/pros1.svg";
import pros2 from "../Assests/pros2.svg";
import pros3 from "../Assests/pros3.svg";
const Pros = () => {
  return (
    <div className="pros-cont">
      <div className="pros-head-cont">
        <div className="pros-sub-head">everything you need at one place</div>
        <div className="pros-head">Pros of Joining Upskill Mafia </div>
      </div>
      <div className="pros-main-cont">
        <div className="pros-card">
          <div className="pros-card-img">
            <img src={pros1} alt="img1" />
          </div>
          <div className="pros-card-det">
            Experience{" "}
            <b className="pros-card-col">virtual learning with peers</b>
          </div>
          <div className="pros-card-pts-cont">
            <div className="pros-card-pts">Self-paced lectures</div>
            <div className="pros-card-pts">
              create your team of 2-4 members and work on Assignments & case
              studies together.
            </div>
          </div>
        </div>
        <div className="pros-card">
          <div className="pros-card-img">
            <img src={pros2} alt="img1" />
          </div>
          <div className="pros-card-det">
            Get 1:1 Mentorship and{" "}
            <b className="pros-card-col">portfolio Assistance</b>
          </div>
          <div className="pros-card-pts-cont">
            <div className="pros-card-pts">
              instantly resolve doubts with your mentor
            </div>
            <div className="pros-card-pts">
              Build a strong portfolio with help of review sessions
            </div>
          </div>
        </div>
        <div className="pros-card">
          <div className="pros-card-img">
            <img src={pros3} alt="img1" />
          </div>
          <div className="pros-card-det">
            Get certified & unlock{" "}
            <b className="pros-card-col"> job opportunities</b>
          </div>
          <div className="pros-card-pts-cont">
            <div className="pros-card-pts">
              become an industry ready uX/UI Designer
            </div>
            <div className="pros-card-pts">
              Get access to exclusive internship & Job Opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pros;
