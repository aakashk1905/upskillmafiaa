import React, { useEffect, useState } from "react";
import "./Carousel.css";
import ma1 from "../Assests/ma1.png";
import fa1 from "../Assests/fa1.png";
import fa2 from "../Assests/fa2.png";
import fa3 from "../Assests/fa3.png";
import ma2 from "../Assests/ma2.png";
const Carousel = () => {
  const items = [
    {
      img: fa1,
      name: "Praneetha Singh Bekkam",
      from: "From Delhi",
      rev: "The interface is unique, and peer learning is fantastic. My team's support made the learning process perfect",
    },
    {
      img: ma1,
      name: "Yuvraj",
      from: "From Chennai",
      rev: "Upskillmafia Virtual Campus exceeded expectations. Peer learning, senior presence, and hackathons create a dynamic and engaging environment. Kudos for a thriving community, all for free!",
    },
    {
      img: fa2,
      name: "Shreya pawar",
      from: "From Chhatisgarh",
      rev: "Impressed with Upskillmafia's teaching methodology, peer learning, and mentor support. Confidence in the platform led to recommendations. Grateful for a free learning experience.",
    },
    {
      img: ma2,
      name: "Priyansh Aggarwal",
      from: "From Himachal",
      rev: "Initially skeptical, but Upskillmafia's free UIUX course surpassed expectations. Achieving top 3 in a hackathon was a highlight. Grateful for the free opportunity and newfound skills",
    },
    {
      img: fa3,
      name: "Jagriti",
      from: "From Maharashtra",
      rev: "Chose Upskillmafia over a paid UIUX platform, and it exceeded expectations. Learning UIUX for free, making friends, and reaching milestones in a short time left a lasting impact.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(items.length - (isMobile ? 1 : 3), prevIndex + 1)
    );
  };

  return (
    <div className="carousel-container">
      <div className="arrow-div" onClick={handlePrevClick}>
        &lt;
      </div>
      <div className="carousel">
        {items
          .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
          .map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="car-card">
                <div className="car-card-name-cont">
                  <img src={item.img} alt="rev1" />
                  <div className="car-name-cont">
                    <div className="car-name">{item.name}</div>
                    <div className="car-loc">{item.from}</div>
                  </div>
                </div>
                <div className="car-card-text">{item.rev}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="arrow-div" onClick={handleNextClick}>
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
