import './App.css'
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

function App() {
  const texts = [" discover healthy foods", " expose unhealthy foods", " build better habits", " transform your health"]
  const [index, setIndex] = useState(0);
  const variants = {
    enter: direction => {
      return {
        y: 50,
        zIndex: -99
      };
    },
    center:direction=> {
      return{

        zIndex: -99,
        y: 0,
      }
    },
    exit: direction => {
      return {
        y: -300,
        zIndex: -99,
      };
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);

    return () => clearTimeout(timer);
  }, [index, setIndex]);

  return (
    <>
      <div className='mainSection'>
        <img src='/Logo.png' className='logo' />
        <h6 className='freeText'>a <span className='yellowFree'>FREE</span> experience from <img src='/zoe.svg' alt="Zoe logo" /></h6>
        <div className='animatedStuff '>
          <AnimatePresence>
            <h1 className='mainTitle'>Scan to
              <motion.span
                style={{ position: "absolute",height:"100px" }}
                variants={variants}
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 1,
                  delay: 1,
                  y: { type: "spring", stiffness: 300, damping: 200 },
                  opacity: { duration: 0.5 }
                }}
              >
                <span className='mainItalic'> {texts[index]}</span>
              </motion.span>
            </h1>
          </AnimatePresence>
        </div>
        <div>
          <p className='subTitle'>Scan your favourite foods in the supermarket and find out what's really healthy for you. All based on world-leading nutrition science.</p>
          <img src='/Frame.png' className='downloadOptions' alt="Frame" />
          <div className='phoneGroup'>
            <img src='/Group.png' className='groupedPhones' alt="Group" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
