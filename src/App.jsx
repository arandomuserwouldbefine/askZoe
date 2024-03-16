
import './App.css'
import { useSpring, animated } from '@react-spring/web'
function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    <>
      <div className='mainSection'>

        <img src='/Logo.png' className='logo' />

        <h6 className='freeText'>a <span className='yellowFree'>FREE</span> experience from <img src='/zoe.svg'></img></h6>


        <h1 className='mainTitle'>Scan food to <span className='mainItalic'>discover healthy foods</span></h1>

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
