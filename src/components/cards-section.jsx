import { useState } from 'react'
import '../styles/cards-section.css'
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

export default function cardssection() {
    const [display, setdisplay] = useState(false)
  return (
    <>
    <div className='main-cards-section flex flex-col mt-4 justify-center items-center py-4 px-4'>
        <div className='w-full mt-4 mb-8'>
            <p className='flex lg:text-xl text-white ml-20 font-bold'>SERVICES</p>
            <h1 className=' text-white lg:text-4xl font-sans ml-20 mt-12 mb-4 text-2xl'>Transform your business with advanced technologies</h1>
        </div>
        <div className='flex all-card-div'>
            <div className='cards-all'>
                <div className='one-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Artificial Intelligence</h1>
                </div>
                <div className='two-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Cloud</h1>
                </div>
                <div className='three-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Cognitive Business Operations</h1>
                </div>
                <div className='four-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Consulting
</h1>
                </div>
            </div>
            <div className={`cards-all transition-all duration-500 ${display ? 'flex': 'hidden'}`}>
                <div className='five-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Artificial Intelligence</h1>
                </div>
                <div className='six-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Cloud</h1>
                </div>
                <div className='seven-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Cognitive Business Operations</h1>
                </div>
                <div className='eight-card smae-card'>
                    <h1 className='text-white text-2xl mt-6 ml-6 font-bold'>Consulting
</h1>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 mb-4'>
                <button className='py-2 px-6 flex flex-row justify-around items-center gap-2 border-2 border-white rounded-full bg-transparent text-xl text-white hover:bg-white hover:text-black hover:transition-all' onClick={() => setdisplay(!display)}>
                {display ? (
                    <>
                        See Less <FaArrowUp />
                    </>
                ) : (
                    <>
                        See More <FaArrowDown />
                    </>
                )}
                </button>
            </div>
        </div>
    </div>
    
    </>
  )
}
