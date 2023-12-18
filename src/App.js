import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import error from "./Assests/error.gif";
import Hackathon from "./Pages/Hackathon";
import Success from "./Pages/Success";
import GoogleDocEmbed from "./Components/GoogleDocEmbed";
import Main from "./Pages/Main";

function RedirectComponent() {
  const width = window.innerWidth;
  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/6qqo-919q-tsug/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/6qqo-919q-tsug/office`;
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponentE2() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/h8tj-5ba4-9p8c/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/h8tj-5ba4-9p8c/office`;
    }
  }, [width, room]);
  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponentE3() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/hjfk-gmod-pgxg/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/hjfk-gmod-pgxg/office`;
    }
  }, [width, room]);
  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}

function RedirectComponentE4() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/wgay-85i4-1kiv/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/wgay-85i4-1kiv/office`;
    }
  }, [width, room]);
  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}

function RedirectComponent2() {
  const width = window.innerWidth;
  // console.log(width)
  useEffect(() => {
    if (width >= 800)
      window.location.href =
        "https://cosmos.video/v/6qqo-919q-tsug/office/r/stage";
  }, [width]);
  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function Whatsapp() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/IAG4CrSEa0W7nJ22YOPbfB";
  }, []);
  return null;
}
function Telugu() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/ItgE2udKs7p6xiADFFf0U9";
  }, []);
  return null;
}
function Tamil() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/DRBBaf0gN2T7mKPPzNM5GM";
  }, []);
  return null;
}
function English() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/JA2GXuyhYNuHZJ4651vBBe";
  }, []);
  return null;
}
function Hindi() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/KQFmAsupot54dDUvFeeZBG";
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        ></Route>
        <Route path="/campus" element={<RedirectComponent />} />
        <Route path="/campus/stage" element={<RedirectComponent2 />} />
        <Route path="/campus/eventhall2" element={<RedirectComponentE2 />} />
        <Route path="/campus/eventhall3" element={<RedirectComponentE3 />} />
        <Route path="/campus/eventhall4" element={<RedirectComponentE4 />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/telugu" element={<Telugu />} />
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/english" element={<English />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/success" element={<Success />} />
        <Route path="/weekly-task" element={<GoogleDocEmbed />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
