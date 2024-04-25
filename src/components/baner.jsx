import  { useState } from 'react';
import '../styles/baner.css';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Banner() {
  const [activeLink, setActiveLink] = useState('TCS');

  return (
    <>
      <div className='navlinks bg-black text-white flex flex-row lg:gap-8 py-8 items-center'>
        <a href="#" onClick={(e) =>{
            e.preventDefault();
             setActiveLink('TCS')
        }} className={activeLink === 'TCS' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>TCS at Davos 2024</a>
        <a href="#"  onClick={(e) =>{
            e.preventDefault();
             setActiveLink('blog')
        }} className={activeLink === 'blog' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Blog</a>
        <a href="#"  onClick={(e) =>{
            e.preventDefault();
             setActiveLink('download')
        }} className={activeLink === 'download' ? 'active flex lg:ml-20 border-b-2 py-1 text-2xl border-blue-700' : 'flex lg:ml-20 border-b-2 py-1 text-2xl'}>Download the report</a>
      </div>

      <div className='section bg-black py-8'>
        {activeLink === 'TCS' && <div className='main-sections'>
            <div className='top-section'>
                <div className='img-sec'>
                    <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/tcs-at-davos-2024?wid=1000&hei=526&dpr=off" alt="" />
                </div>
                <div className='text-section'>
                    <h1>In the wake of generative AI's mainstream adoption, organizations worldwide grappled with its impact.</h1>
                    <p>A year later at Davos, a deeper understanding of AI's potential has emerged, signaling a shift from strategy to execution.Â </p>
                </div>
            </div>
                <div className='lower-section'>
                    <button>
                        <h3>Learn More</h3>
                        <a href=""><FaLongArrowAltRight /></a>
                    </button>
                </div>
            </div>}
        {activeLink === 'blog' && 
        <div className='main-sections'>
        <div className='top-section'>
            <div className='img-sec'>
                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/future-ai-the-future-human-tcs-davos-2024?wid=1000&hei=526&dpr=off" alt="" />
            </div>
            <div className='text-section'>
                <h1>The future is AI. The future is human: TCS at Davos 2024</h1>
                <p>We covered the action at the World Economic Forum 2024 in real time over the week as organizations and fellow strategic partners focused on the fundamental principles driving trust, including transparency, consistency and accountability.</p>
            </div>
        </div>
            <div className='lower-section'>
                <button>
                    <h3>Learn More</h3>
                    <a href=""><FaLongArrowAltRight /></a>
                </button>
            </div>
        </div>
        }
        {activeLink === 'download' && 
        <div className='main-sections'>
        <div className='top-section'>
            <div className='img-sec'>
                <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/strategy-execution-ai-guiding-principles?wid=1000&hei=526&dpr=off" alt="" />
            </div>
            <div className='text-section'>
                <h1>From strategy to execution: AI guiding principles</h1>
                <p>Read our 5-point plan on how CEOs can adopt AI within their organisation in 2024.Â </p>
            </div>
        </div>
            <div className='lower-section'>
                <button>
                    <h3>Learn More</h3>
                    <a href=""><FaLongArrowAltRight /></a>
                </button>
            </div>
        </div>
        }
      </div>
      
     
    </>
  );
}
