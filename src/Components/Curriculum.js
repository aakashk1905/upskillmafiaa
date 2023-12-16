import React, { useState } from "react";
import "./Curic.css";
import currpt1 from "../Assests/currpt1.svg";
import currpt2 from "../Assests/currpt2.svg";
import currpt3 from "../Assests/currpt3.svg";
import curr1 from "../Assests/curr1.svg";
import curr2 from "../Assests/curr2.svg";
import curr3 from "../Assests/curr3.svg";
import curr4 from "../Assests/curr4.svg";
import curr5 from "../Assests/curr5.svg";
import cross from "../Assests/cross.svg";

const Curriculum = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`curr-cont ${clicked ? "db-mob-freeze" : ""}`}>
      <div className="curr-head-cont">
        <div className="curr-head">Standard Curriculum</div>
        <div className="curr-sub-head">
          Explore a curated curriculum, from essential UI/UX <br />
          principles to hands-on design practices.
        </div>
      </div>
      <div className="curr-pts-cont">
        <div className="curr-pts">
          <img src={currpt1} alt="currpt1" />
          <span>Level up with top UX Tools Mastery</span>
        </div>
        <div className="curr-pts">
          <img src={currpt2} alt="currpt1" />
          <span>Master the Design Fundamentals.</span>
        </div>
        <div className="curr-pts">
          <img src={currpt3} alt="currpt1" />
          <span>Bring your Skills to life with Real-world Projects</span>
        </div>
      </div>

      <div className="curr-mid-head">See what you’ll learn </div>
      <div className="curr-card-cont">
        <div className="curr-card">
          <div className="curr-abs"> MODULE 1</div>
          <div className="green-card-bg">
            <img src={curr1} alt="curr1" />
          </div>
          <span>Introduction to UI/UX Design</span>
        </div>

        <div className="curr-card">
          <div className="curr-abs"> MODULE 2</div>
          <div className="green-card-bg">
            <img src={curr2} alt="curr1" />
          </div>
          <span>User Research and Survey</span>
        </div>
        <div className="curr-card">
          <div className="curr-abs"> MODULE 3</div>
          <div className="green-card-bg">
            <img src={curr3} alt="curr1" />
          </div>
          <span>Visual Design </span>
        </div>
        <div className="curr-card">
          <div className="curr-abs"> MODULE 4</div>
          <div className="green-card-bg">
            <img src={curr4} alt="curr1" />
          </div>
          <span>Interaction Design</span>
        </div>
        <div className="curr-card">
          <div className="curr-abs"> MODULE 5</div>
          <div className="green-card-bg">
            <img src={curr5} alt="curr1" />
          </div>
          <span>Advanced Topics in UI/UX</span>
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
      <div className="curr-cta" onClick={() => setClicked(true)}>
        view Detailed curriculum
      </div>

      {clicked && (
        <div className="curr-popup-cont">
          <div className="curr-pop">
            <img
              src={cross}
              alt="curr1"
              className="img-abs-curr"
              onClick={() => setClicked(false)}
            />
            <div className="curr-head curr-head-abs">
              Explore . learn . Implement{" "}
            </div>
            <div className="curr-pop-cards-cont">
              <div className="curr-pop-cards">
                <div className="curr-pop-abs">UX Curriculum</div>
                <span>1. Introduction to UI/UX design</span>
                <span>2. User Research and Survey</span>
                <span>3. User Persona & Empathy Mapping</span>
                <span>4. Competitor Analysis</span>
                <span>5. User Flow & Sketching</span>
                <span>6. Color Palette / Typography / Spacing </span>
                <span>7. HIGH fidelity designs</span>
                <span style={{ border: "none" }}>8. Prototyping</span>
              </div>
              <div className="curr-pop-cards">
                <div className="curr-pop-abs">UI Curriculum</div>
                <span>1. Introduction to Figma Basics </span>
                <span>2. Working with Frames, Images</span>
                <span>3. Advanced Object Manipulation in Figma</span>
                <span>4. Autolayout Basics</span>
                <span>5. Advanced Autolayout Techniques</span>
                <span>6. Mastering Components </span>
                <span style={{ border: "none" }}>
                  7. Layout and Grid Systems in Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculum;
