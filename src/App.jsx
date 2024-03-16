
import './App.css'
import { AnimatePresence, motion } from "framer-motion";
import { useState,useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
function App() {
  const texts = ["discover healthy foods", "expose unhealthy foods", "build better habits", "transform your health"]
  const [index, setIndex] = useState(0);

  const variants = {
    enter: direction => {
      return {
        x: -20,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: direction => {
      return {
        zIndex: 0,
        opacity: 0
      };
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);
  return (
    <>



      <div className='mainSection'>
        <img src='/Logo.png' className='logo' />


        <h6 className='freeText'>a <span className='yellowFree'>FREE</span> experience from <img src='/zoe.svg'></img></h6>

        <h1 className='mainTitle'>Scan food to
          <AnimatePresence>
            <motion.span
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x:-100,delay: 3,duration: 5
              }}
            >
              <span className='mainItalic'>{texts[index]}</span>
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className='subTitle'>Scan your favourite foods in the supermarket and find out what's really healthy for you. All based on world-leading nutrition science.</p>

        <img src='/Frame.png' className='downloadOptions' />

        <div className='phoneGroup'>
          <img src='/Group.png' className='groupedPhones' ></img>
        </div>
      </div>

    </>
  )
}

export default App
