import React from 'react'
import '../styles/slides.css'
import { LiaDatabaseSolid } from "react-icons/lia";

export default function slides() {
  return (
    <>
    <div className='main-slides-last flex w-full flex-col justify-center items-center'>
        <div className='main-slide flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-between items-center w-full py-2'>
                <h1 className='text-white lg:text-4xl font-extralight'>Spotlight on TCS</h1>
                <button href="" className=' border-b-2 border-white text-slate-400'>View all</button>
            </div>
            <div className='main-sliddes flex flex-row justify-between items-center mt-8 mb-8 w-full'>
            <div className='slider-wrapper'>
                <div className='each-slide each-first'>
                    <div className='upper-data-link'>
                        <button className=' rounded-full'>Press Release</button>
                    </div>
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                <div className='each-slide each-second'>
                    <div className='upper-data-link'>
                        <button className=' rounded-full'>Press Release</button>
                    </div>
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                <div className='each-slide each-last'>
                    <div className='upper-data-link'>
                        <button className=' rounded-full'>Press Release</button>
                    </div>
                    <div className='lower-data-link'>
                        <h1 className=' text-3xl text-white mb-2'>stay up-to-date with latest tcs news</h1>
                        <button className='flex flex-row justify-center items-center gap-2 text-white text-lg font-bold'><LiaDatabaseSolid /> Read More</button>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className='buttons flex flex-col py-12 justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6'>
            <h1 className='flex text-2xl lg:text-6xl text-white'>Join our team.</h1>
            <p className='text-slate-400'>Realize your potential.</p>
            <button className='py-4 px-6 border-2 border-white rounded-full bg-blue-500 hover:bg-white transition-all hover:border-blue-500'>Explore Techland Careers</button>
        </div>
    </div>
    </>
  )
}
