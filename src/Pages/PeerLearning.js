import "./Styles/PeerLearning.css";
import Peer from '../Assests/peer2.jpg'
import { useEffect, useRef } from "react";
const PeerLearning = () => {


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

    return (<>
        <style jsx="{value.toString()}">
         {
            `
            .peer-container{
                background-image: radial-gradient( circle farthest-side at var(--x,100px) var(--y,100px), #002b46 0%, transparent 100%)
            }
            `
         }
        </style>
        <div ref={bgRef} className="peer-container">
            <div className="peer-left">
                <div className="peer-text-container">
                    <div className="peer-headings">
                        <div className="peer-heading">Peer</div>
                        <div className="peer-heading under">Learning</div>
                    </div>
                    <div className="peer-para">
                      <p>A collaborative learning approach where designers learn from each other through sharing ideas, feedback, and experiences.</p>
                    </div>
                </div>
                <div className="peer-cards-container">
                    <div className="peer-cards peer-card-selected">
                        <span className="peer-card-text">
                            Boost portfolio with real world projects
                        </span>
                    </div>
                    <div className="peer-cards">
                        <span className="peer-card-text">{`Winner gets cash prize reward of ₹5000 `}</span>
                    </div>
                    <div className="peer-cards">
                        <span className="peer-card-text">
                            Participate with your peer Team
                        </span>
                    </div>
                </div>
            </div>
            <div className="peer-right">
                <div className="peer-image-container">
                    <img src={Peer} alt="Peer" /> 
                </div>
            </div>
        </div>
        </>
    );
};

export default PeerLearning;
