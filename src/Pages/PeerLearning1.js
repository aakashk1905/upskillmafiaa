import React, { useEffect } from 'react'
import './Styles/PeerLearning1.css'
import Peer from '../Assests/peerlearning.jpg'
import Peer2 from '../Assests/peer2.jpg'
import Peerr from '../Assests/peerr.png'
// import Hack from '../Assests/hackathon.png'
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Tilt from 'react-parallax-tilt';


const PeerLearning1 = () => {
    const targetRef = useRef(null);


    const bgRef = useRef(null);
    useEffect(() => {
        const updateMousePosition = (ev = MouseEvent) => {
            if (!bgRef.current) return;
            const { clientX, clientY } = ev;
            bgRef.current.style.setProperty("--x", `${clientX}px`);
            bgRef.current.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);



    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });
    //   const opacity = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], [0, 0, 1, 1]);
    //   const opacityRem = useTransform(scrollYProgress, [0, 0.79, 0.8, 1], [0, 0, 1, 1]);


    const opacityImo = useTransform(scrollYProgress, [0, 0.45, 0.54, 0.5, 1], [1, 1, 0, 0, 0]);
    const opacityImt = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.55, 0.7, 0.79, 1], [0, 0, 0.5, 1, 1, 0, 0]);
    const opacityImth = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], [0.5, 0.5, 0.5, 1, 1]);

    const opacityCard2 = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], [0.2, 0.2, 0.5, 1, 1, 1]);
    const opacityCard3 = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], [0.2, 0.2, 0.5, 1, 1]);


    const displayImo = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], ["flex", "flex", "none", "none"]);
    const displayImt = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], ["none", "none", "flex", "flex", "none", "none"]);
    const displayImth = useTransform(scrollYProgress, [0, 0.79, 0.8, 1], ["none", "none", "flex", "flex"]);

    const displayCardo = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], ["flex", "flex", "flex", "flex"]);
    const displayCardt = useTransform(scrollYProgress, [0, 0.49, 0.5, 0.79, 0.8, 1], ["hidden", "hidden", "flex", "flex", "flex", "flex"]);
    const displayCardth = useTransform(scrollYProgress, [0, 0.79, 0.8, 1], ["hidden", "hidden", "flex", "flex"]);

    const xImo = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], ["100px", "0px", 0, 0]);
    const xImt = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 1], ["100px", "100px", "0px", "0px", "0px"]);
    const xImth = useTransform(scrollYProgress, [0, 0.79, 0.8, 0.9, 1], ["100px", "100px", "100px", "0px", "0px"]);

    return (
        <>
            <style jsx="{value.toString()}">
                {
                    `.p-container{
                        background-image: radial-gradient( circle farthest-side at var(--x,100px) var(--y,100px), #002b46 0%, transparent 100%)
                    } `
                }
            </style>
            <section ref={targetRef} className="p-section" id="peer">
                <div ref={bgRef} className="p-container">
                    <div className="p-left">
                        <div className="p-text-container">
                            <div className="p-headings">
                                <div className="p-heading">Peer</div>
                                <div className="p-heading under">Learning</div>
                            </div>
                            <div className="p-para">
                                <p>A collaborative learning approach where designers learn from each other through sharing ideas, feedback, and experiences.</p>
                            </div>
                        </div>
                        <div className="p-cards-container">
                            <motion.div className="p-cards p-card-selected" style={{ display: displayCardo }}>
                                <span className="p-card-text">Learn UI UX with your peers</span>
                            </motion.div>
                            <motion.div style={{ display: displayCardt, opacity: opacityCard2 }} className="p-cards p-card-selected">
                                <span className="p-card-text">{`Collaborative Group assignments`}</span>
                            </motion.div>
                            <motion.div style={{ display: displayCardth, opacity: opacityCard3 }} className="p-cards p-card-selected">
                                <span className="p-card-text">
                                    Participate in challenges together
                                </span>
                            </motion.div>
                        </div>
                    </div>
                    <div className="p-right">

                        <Tilt
                            gyroscope={false}
                            tiltMaxAngleX={40}
                            tiltMaxAngleY={40}
                            perspective={1000}
                            transitionSpeed={1500}
                            scale={1.02}
                            className='tilt'
                        >
                            <div className="p-image-container">
                                <motion.img style={{ display: displayImo, x: xImo, opacity: opacityImo }} src={Peer2} alt="Peer" />
                                <motion.img style={{ display: displayImt, y: xImt, x: 0, opacity: opacityImt }} src={Peer} alt="Peer" />
                                <motion.img style={{ display: displayImth, y: xImth, x: 0, opacity: opacityImth }} src={Peerr} alt="Peer" />
                            </div>
                        </Tilt>

                    </div>

                </div>
            </section >
        </>
    )
}

export default PeerLearning1