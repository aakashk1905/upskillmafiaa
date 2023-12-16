import React, { useState } from "react";
import "./Footer.css";
import logo from "../Assests/logo.svg";
import yt from "../Assests/yt.svg";
import ig from "../Assests/ig.svg";
import linkedin from "../Assests/linkedin.svg";
import fb from "../Assests/fb.svg";
const Footer = () => {
  return (
    <div className="foot-cont">
      <div className="foot-head">Frequently Asked Questions</div>
      <div className="foot-faq-cont">
        <Faqq
          que={"How can I learn on Upskillmafia?"}
          text={
            "Your learning will proceed on our virtual campus where we have provided all the learning resources from which you can study along with your new found peers and if you have any doubts you can ask it with your seniors/mentors present in the campus. There will also be various prized money challenges/hackathons held regularly in which you can participate and polish your skills constantly. See you in the campus"
          }
        />
        <Faqq
          que={"Does the virtual campus have any timings?"}
          text={
            "Virtual campus will be available 24*7 but your mentors will only be available between 8-11 pm everyday."
          }
        />
        <Faqq
          que={"How can I find peers on campus?"}
          text={
            "At first obviously we will keep on organising team making sessions in the campus regularly or else it's preferable if you can engage and make friends with others in the community and start studying together"
          }
        />
        <Faqq
          que={
            "Do you provide placement and are there any shortlisting criteria?"
          }
          text={
            "Yes we will keep on bringing internship/job opportunities regularly in the campus but you’ll be a preferable candidate based on your activity and performance in challenges/hackathons in the campus."
          }
        />
        <Faqq
          que={
            "How can I become a part of Upskillmafia’s Mission of democratising education?"
          }
          text={
            "First of all, thanks for having this thought. At first everyone who joined our platform is by default a part of our mission but if you really want to work with us so at first try to be a good student learn UIUX completely and then try to be of some help to others in the community as we might officially make you senior in the community based on it."
          }
        />
        <Faqq
          que={"Why is it free?"}
          text={
            "We believe in democratising quality education and our vision is to make a self sustainable community of the students by the students for the students so making it free is just a small step towards that goal."
          }
        />
      </div>
      <div className="foot-fcont">
        <div className="foot-logo-cont">
          <img src={logo} alt="logo" />
        </div>
        <div className="foot-contact-cont">
          <div className="foot-con-head">Contact Us</div>
          <a href="tel:+917988800474" rel="noreferrer">
            <span>+91-7988800474</span>
          </a>
          <a href="mailto: upskillmafia@gmail.com" rel="noreferrer">
            <span>upskillmafia@gmail.com</span>
          </a>
        </div>
        <div className="foot-contact-cont">
          <div className="foot-con-head">Social Links</div>
          <div className="foot-icons">
            <img src={fb} alt="fb" />
            <a
              href="https://www.instagram.com/upskillmafia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ig} alt="ig" />
            </a>
            <a
              href="https://www.linkedin.com/company/upskillmafia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.youtube.com/@UpskillMafia"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={yt} alt="yt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faqq = ({ que, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={"faq " + (open ? "open" : "")}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <div className="faq-q-text">{que}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="35"
          viewBox="0 0 39 35"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0636 12.7198C10.8061 12.0387 12.0101 12.0387 12.7526 12.7198L19.0136 18.4633L25.2746 12.7198C26.0172 12.0387 27.2211 12.0387 27.9636 12.7198C28.7061 13.401 28.7061 14.5053 27.9636 15.1865L20.3581 22.1632C19.6156 22.8443 18.4116 22.8443 17.6692 22.1632L10.0636 15.1865C9.32116 14.5053 9.32116 13.401 10.0636 12.7198Z"
            fill="#E3D34B"
            fillOpacity="0.92"
          />
        </svg>
      </div>
      <div className="faq-answer">{text}</div>
    </div>
  );
};

export default Footer;
