import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const texts = [
    " discover healthy foods",
    " expose unhealthy foods",
    " build better habits",
    " transform your health",
  ];
  const [index, setIndex] = useState(0);
  const variants = {
    enter: (direction) => {
      return {
        y: 50,
        zIndex: -99,
      };
    },
    center: (direction) => {
      return {
        zIndex: -99,
        y: 0,
      };
    },
    exit: (direction) => {
      return {
        y: -300,
        zIndex: -99,
      };
    },
  };

  return (
    <>
      <div className="mainSection">
        <img src="/Logo.png" className="logo" />
        <h6 className="freeText">
          a <span className="yellowFree">FREE</span> experience from{" "}
          <img src="/zoe.svg" alt="Zoe logo" />
        </h6>
        <div className="mainTitle">
          Scan to&nbsp;
          <div className="movingText">
            <ul>
              <li className="mainItalic"> discover healthy foods</li>
              <li className="mainItalic"> expose unhealthy foods</li>
              <li className="mainItalic"> build better habits</li>
              <li className="mainItalic"> transform your health</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="subTitle">
            Scan your favourite foods in the supermarket and find out what's
            really healthy for you. All based on world-leading nutrition
            science.
          </p>
          <img src="/Frame.png" className="downloadOptions" alt="Frame" />
          <div className="phoneGroup">
            <img src="/Group.png" className="groupedPhones" alt="Group" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
