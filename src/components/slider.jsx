import  { useState, useEffect } from 'react';
import '../styles/slider.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setpause] =useState(false)
  const sliderItems = ['hello', 'good', 'light', 'white', 'yellow' ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    if (!pause) {
      const intervalId = setInterval(handleNext, 4000); // Run handleNext every 2 seconds
      return () => clearInterval(intervalId); // Clear the interval on component unmount
    }
  }, [currentIndex, pause]);
  const style =  {
    backgroundImage: `url('https://t4.ftcdn.net/jpg/03/43/17/55/240_F_343175522_BQcu6mGK2pLgIRdLeFvxxB0xcPExc2vd.jpg')`,
    backgroundSize: 'cover',
  backgroundPosition: 'center',
     
  }
  const stylee =  {
    backgroundImage: `url('https://t3.ftcdn.net/jpg/03/58/13/40/240_F_358134087_UkmlaBGoZtEjjLu6kRtfoXCLb1aNfqV0.jpg')`,
    backgroundSize: 'cover',
  backgroundPosition: 'center',
     
  }
  const styleee =  {
    backgroundImage: `url('https://t4.ftcdn.net/jpg/00/97/48/53/240_F_97485304_njTyx9y8ouKEhudtfd2xSPUiYmnCkWOO.jpg')`,
    backgroundSize: 'cover',
  backgroundPosition: 'center',
     
  }
  const styleeee =  {
    backgroundImage: `url('https://img.freepik.com/free-photo/front-view-delivery-men-job-concept_23-2148684750.jpg?t=st=1713000258~exp=1713003858~hmac=919b4c0f68993a5d27139d5819db2d44ef63b07c9fd2c2a6dcd4260d42dbebac&w=1060')`,
    backgroundSize: 'cover',
  backgroundPosition: 'center',
     
  }
  const styl =  {
    backgroundImage: `url('https://img.freepik.com/free-vector/illustrated-delivery-service-with-masks_23-2148493018.jpg?t=st=1713000385~exp=1713003985~hmac=342eb4cb8f5f8e9b478c2f5638f08f1d26e5932f1b62f5c53bb3e17d014ad47d&w=900')`,
    backgroundSize: 'cover',
  backgroundPosition: 'center',
     
  }

  return (
    <>

      <div className='main-slider bg-black'>
        <div className='slider-div' style={{ transform: `translateX(-${currentIndex * 1030}px)` }}>
          
            <div className='slider' style={style} onMouseOver={() => setpause(true)} onMouseLeave={() => setpause(!pause)}>
              <div className='color'>
             <h1>Unlock the full potential of your Business</h1>
             <button className='bg-blue-600 text-white rounded-full py-4 px-12'>Learn More</button>
             </div>
            </div>
            
            <div className='slider' style={stylee} onMouseOver={() => setpause(true)} onMouseLeave={() => setpause(!pause)}>
              <div className='color'>
             <h1>The future is AI . The future is Human</h1>
             <button  className='bg-blue-600 text-white rounded-full py-4 px-12'>Contact Us</button>
             </div>
            </div>
            <div className='slider' style={styleee} onMouseOver={() => setpause(true)} onMouseLeave={() => setpause(!pause)}>
              <div className='color'>
             <h1>Make net-megative the new benchmark </h1>
             <button  className='bg-blue-600 text-white rounded-full py-4 px-12'>Contact Us</button>
             </div>
            </div>
            <div className='slider' style={styleeee} onMouseOver={() => setpause(true)} onMouseLeave={() => setpause(!pause)}>
              <div className='color'>
             <h1>Record deals and robust margins for TCS in Q4</h1>
             <button  className='bg-blue-600 text-white rounded-full py-4 px-12'>Contact Us</button>
             </div>
            </div>
            <div className='slider' style={styl} onMouseOver={() => setpause(true)} onMouseLeave={() => setpause(!pause)}>
              <div className='color'>
             <h1>When glory beckons London </h1>
             <button  className='bg-blue-600 text-white rounded-full py-4 px-12'>Contact Us</button>
             </div>
            </div>
          
        </div>
      <div className='btns'>
        <button onClick={() => setpause(!pause)}>{pause ? <FaPlayCircle />: <FaCirclePause />}</button>
        <button onClick={handleNext}><FaArrowRight /></button>
        <button onClick={handlePrevious}><FaArrowLeft /></button>
      </div>
      </div>
    </>
  );
}
