import React from "react";
import "./Hero.css";
import logo from "../Assests/logo.svg";
import members from "../Assests/hero-members.svg";
import avatars from "../Assests/hero-avatars.svg";
const Hero = () => {
  return (
    <div className="container1">
      <div className="hero-inner-cont">
        <div className="hero-nav-cont">
          <img src={logo} alt="Logo" />
          <div className="hero-nav-btn-cont">
            {/* <div className="hero-nav-login">Login</div>
            <div className="hero-nav-signup">Sign Up</div> */}
          </div>
        </div>
        <div className="hero-main-cont">
          <div className="hero-head">
            Master <span className="hero-head-col">UI/UX Design</span> With Your{" "}
            <span className="hero-head-col">
              <br />
              Peers
            </span>{" "}
            For <span className="hero-head-col">Free</span>
          </div>
          <div className="hero-sub-head">
            Step into India's First UX/UI Virtual Campus! A place to Connect,
            collaborate, &<br /> Boost your learning journey through teamwork
            and shared knowledge.
          </div>
          <div className="hero-member-cont">
            <img src={members} alt="members" />
            <span>3k+ Members</span>
          </div>
          <a
            href="https://chat.whatsapp.com/Dk34YejxXMoEtJWTTZd4LB"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hero-cta">Join Now</div>
          </a>
        </div>
        <div className="hero-abs-img-cont">
          <img src={avatars} alt="avatars" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
