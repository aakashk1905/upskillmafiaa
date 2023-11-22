import React, { useState } from "react";
import "./ms.css";
import logo from "../../Assests/logo.png";
import close from "../../Assests/close.svg";

const MultiStepForm = ({ setShowForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [teamName, setTeamName] = useState("");
  const [numMembers, setNumMembers] = useState("");
  const [teamMembers, setTeamMembers] = useState([{}]);
  const [teamValidation, setTeamValidation] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const submitFormData = async () => {
    try {
      const response = await fetch(
        "https://api.tutedude.com/lms/hackathon/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentStep,
            teamName,
            numMembers,
            teamMembers,
          }),
        }
      );

      if (response.status === 201) {
        console.log("Form data saved successfully");
        alert("Registered successfully");
        window.location.href = "https://upskillmafia.com/success";
      } else {
        console.error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "teamName") {
      setTeamValidation(true);
    }
    if (name === "numMembers" && value <= 0) {
      setTeamValidation(false);
    }
    switch (name) {
      case "teamName":
        setTeamName(value);
        break;
      case "numMembers":
        setNumMembers(value);
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (teamName && numMembers > 1 && numMembers <= 4) {
        setCurrentStep(currentStep + 1);
      } else {
        setTeamValidation(false);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addTeamMember = () => {
    const invalidEmails = teamMembers.filter(
      (member) => !isEmailValid(member.email)
    );

    if (invalidEmails.length > 0) {
      alert("Please enter Valid Email Addresses For All Members");
      return;
    }
    if (teamMembers.length < numMembers) {
      setCurrentStep(currentStep + 1);
      setTeamMembers((prevState) => [
        ...prevState,
        { name: "", email: "", number: "" },
      ]);
    } else {
      console.log("Team members");
      console.log({ currentStep, teamName, numMembers, teamMembers });
      submitFormData();
    }
  };

  const updateTeamMember = (index, key, value) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][key] = value;
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div className="form-container">
      <div className="form-logo-cont">
        <img src={logo} alt="Form Bg" />
        <div className="forrm-head">Hackathon 2023</div>
        <div
          className="form-close"
          onClick={() => {
            setShowForm(false);
          }}
        >
          <img src={close} alt="Cross" />
        </div>
      </div>
      <div className="form-cont">
        <div className="form-reg-head">Registration Form</div>
        <div className="form-reg-head1">
          (Its recommended to have 4 members it will inrease your chances of
          winning)
        </div>
        {currentStep === 1 && (
          <div className="f-page">
            <label>
              Team Name: *
              <input
                type="text"
                placeholder="Enter Team Name"
                name="teamName"
                value={teamName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Number of Team Members: *
              <input
                type="number"
                min={2}
                max={4}
                placeholder="Team Members limit 2 - 4 "
                name="numMembers"
                value={numMembers}
                onChange={handleInputChange}
              />
            </label>
            {!teamValidation && (
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                  alignSelf: "center",
                }}
              >
                Enter Required Fields / Team members between 2-4
              </p>
            )}
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {currentStep > 1 && currentStep <= numMembers + 1 && (
          <div className="f-page">
            {/* <h2>Step {currentStep}: Team Member {currentStep - 1} Details</h2> */}
            <label>
              {currentStep - 1}st Member Name: *
              <input
                type="text"
                placeholder="Name Of Team Member"
                value={
                  teamMembers.length !== 0
                    ? teamMembers[currentStep - 2].name
                    : ""
                }
                onChange={(e) =>
                  updateTeamMember(currentStep - 2, "name", e.target.value)
                }
              />
            </label>
            <label>
              Email: *
              <input
                type="email"
                placeholder="Email of team member"
                required
                value={
                  teamMembers.length !== 0
                    ? teamMembers[currentStep - 2].email
                    : ""
                }
                onChange={(e) =>
                  updateTeamMember(currentStep - 2, "email", e.target.value)
                }
              />
            </label>
            <label>
              Whatsapp Number: *
              <input
                type="number"
                required
                placeholder="Whatsapp Number Of Team Member"
                value={
                  teamMembers.length !== 0
                    ? teamMembers[currentStep - 2].number
                    : ""
                }
                onChange={(e) =>
                  updateTeamMember(currentStep - 2, "number", e.target.value)
                }
              />
            </label>
            <div className="s-page-btn-cont">
              {currentStep > 1 && (
                <button type="button" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {currentStep <= numMembers ? (
                currentStep < teamMembers.length + 1 ? (
                  <button type="button" onClick={handleNext}>
                    Next
                  </button>
                ) : (
                  <button type="button" onClick={addTeamMember}>
                    Next
                  </button>
                )
              ) : (
                <button
                  type="button"
                  disabled={buttonClicked}
                  onClick={() => {
                    setButtonClicked(true);
                    addTeamMember();
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
