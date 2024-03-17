import './App.css'
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from 'react';

function App() {
  const texts = [" discover healthy foods", " expose unhealthy foods", " build better habits", " transform your health"]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='mainSection'>
        <img src='/Logo.png' className='logo' alt="Logo" />
        <h6 className='freeText'>a <span className='yellowFree'>FREE</span> experience from <img src='/zoe.svg' alt="Zoe logo" /></h6>
        <div className='alig'>
          <div className='mainTitle'>Scan to</div><div className='mainTitle'>
            <AnimatePresence >
              <motion.div
                className='movingText'
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -37 }}
                exit={{ opacity: 0, y: -100 }}
                style={{ position: "absolute"}}
              >
                <span className='mainItalic'>{texts[index]}</span><br />
              </motion.div>
            </AnimatePresence>
          </div>
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

export default App;
