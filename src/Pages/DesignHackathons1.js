import "./Styles/DesignHackathons1.css";
import hackathon from "../Assests/hackathon.png"
import hackathon1 from "../Assests/hackathon1.png"
import hackathon2 from "../Assests/hackathon2.png"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Tilt from 'react-parallax-tilt';

const DesignHackathons1 = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });


    const displayImo = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], ["flex", "flex", "none", "none"]);
    const displayImt = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], ["none", "none", "flex", "flex", "none", "none"]);
    const displayImth = useTransform(scrollYProgress, [0, 0.79, 0.8, 1], ["none", "none", "flex", "flex"]);

    // const opacityImo = useTransform(scrollYProgress, [0,0.39, 0.49, 0.5, 1], [1,1, 0, 0,0]);
    // const opacityImt = useTransform(scrollYProgress, [0, 0.49, 0.5,0.6, 0.79, 0.8, 1], [0, 0, 0.5,1, 0.2, 0, 0]);
    // const opacityImth = useTransform(scrollYProgress, [0, 0.79, 0.8,0.9, 1], [0.5, 0.5, 0.5, 1,1]);

    const displayCard1 = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], ["flex", "flex", "flex", "flex"]);
    const displayCard2 = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], ["hidden", "hidden", "flex", "flex", "flex", "flex"]);
    const displayCard3 = useTransform(scrollYProgress, [0, 0.79, 0.8, 1], ["hidden", "hidden", "flex", "flex"]);

    const opacityCard2 = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], [.2, .2, 0.5, 1, 1, 1]);
    const opacityCard3 = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], [.2, .2, 0.5, 1, 1]);

    const xImo = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], ["500px", "0px", 0, 0]);
    const xImt = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 1], ["500px", "500px", "0px", "0px", "0px"]);
    const xImth = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], ["500px", "500px", "500px", "0px", "0px"]);

    // const xCardo = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], ["-500px", "0px", 0, 0]);
    // const xCardt = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 1], ["-500px", "-500px", "0px", "0px", "0px"]);
    // const xCardth = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], ["-500px", "-500px", "-500px", "0px", "0px"]);


    return (
        <section ref={targetRef} className="d-section" id="hackathon">
            <div className="d-container">
                <div className="d-left">
                    <div className="d-text-container">
                        <div className="d-headings">
                            <div className="heading">Monthly Design</div>
                            <div className="heading-col">Hackathons</div>
                        </div>
                        <div className="d-para">
                            <p>Participate in 48 Hours hackathons and get prizes worth <b style={{color:'#f18805'}}>₹5000</b> every month. </p>
                        </div>
                    </div>
                    <div className="d-cards-container">
                        <motion.div className="cards card-selected" style={{ display: displayCard1  }}>
                            <span className="card-text">
                            {`Winner gets cash prize reward of ₹5000`}
                            </span>
                        </motion.div>
                        <motion.div className="cards card-selected2" style={{ display: displayCard2,  opacity: opacityCard2 }}>
                            <span className="card-text">Boost portfolio with real world projects</span>
                        </motion.div>
                        <motion.div className="cards card-selected3" style={{ display: displayCard3,  opacity: opacityCard3 }}>
                            <span className="card-text">
                                Participate with your Design Team
                            </span>
                        </motion.div>
                    </div>
                </div>
                <div className="d-right">

                    <Tilt
                        gyroscope={false}
                        tiltMaxAngleX={45}
                        tiltMaxAngleY={45}
                        perspective={1000}
                        transitionSpeed={1500}
                        scale={1.02}
                        className="tilt"

                    >
                        <div className="d-image-container">
                            <motion.img style={{ display: displayImo, x: xImo }} src={hackathon2} alt="Design" />
                            <motion.img style={{ display: displayImt, x: xImt, y: 0 }} src={hackathon} alt="Design" />
                            <motion.img style={{ display: displayImth, x: xImth, y: 0 }} src={hackathon1} alt="Design" />
                        </div>
                    </Tilt>

                </div>
            </div>
        </section>
    );
};

export default DesignHackathons1;
