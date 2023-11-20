import "./Styles/DesignHackathons.css";
import hackathon from "../Assests/hackathon.png"
const DesignHackathons = () => {
    return (
        <div className="design-container">
            <div className="design-left">
                <div className="design-text-container">
                    <div className="design-headings">
                        <div className="heading">Intense 48Hr Design</div>
                        <div className="heading-col">Hackathons</div>
                    </div>
                    <div className="design-para">
                        <p>Your wait to bag some Real World projects ends here, with Upskillmafia's design community now you can get a chance to participate in Design Hackathons live every week! </p>
                    </div>
                </div>
                <div className="design-cards-container">
                    <div className="cards card-selected">
                        <span className="card-text">
                            Boost portfolio with real world projects
                        </span>
                    </div>
                    <div className="cards card-selected2">
                        <span className="card-text">{`Winner gets cash prize reward of ₹5000 `}</span>
                    </div>
                    <div className="cards card-selected3">
                        <span className="card-text">
                            Participate with your Design Team
                        </span>
                    </div>
                </div>
            </div>
            <div className="design-right">
                <div className="design-image-container">
                    <img src={hackathon} alt="Hackathon" /> 
                </div>
            </div>
        </div>
    );
};

export default DesignHackathons;
