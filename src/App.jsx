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
          <img src="/zoe.svg" className="zoeLogo" alt="Zoe logo" />
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
          <div className="downloadables">
            <a href="https://play.google.com/store/apps/details?id=com.joinzoe.askzoe">
              <img src="/playstore.png" className="downloadOptions" alt="Frame" />
            </a>
            <a href="https://apps.apple.com/us/app/askzoe-food-scanner/id6470290129">
              <img src="/appstore.png" className="downloadOptions" alt="Frame" />
            </a>
          </div>
          <div className="phoneGroup">
            <img src="/Group.png" className="groupedPhones" alt="Group" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;