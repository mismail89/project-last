import React from 'react'
import '../styles/sec.css'
export default function sec() {
  return (
    <>
    
    <div className='card-sec py-8 bg-black'>
        <div className='main-card flex flex-col bg-black'>
            <div className='upper-card text-white flex justify-start items-center mt-10'>
                <h1 className=' ml-8 uppercase text-4xl'>Snapshots</h1>
            </div>
            <div className='lower-card mb-8'>
                <div className='img-card'>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-ai-_cover_long-29881704706450260.png?t=1704782533000" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-data_cover_long-101151704704885757.png?t=1704767541000" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-cloud_cover_long-28291704707156326.png?t=1704782926000" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-running_cover_long-18491704707363210.png?t=1704767393000" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-meta_cover_long-21201704707595061.png?t=1704781789000" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.storifyme.com/accounts/tcs/assets/240x/f-virtual-worlds-portrait-53891676546855467.png?t=1684164815000" alt="" />
                    </div>
                </div>
                <div className='card-text mt-4 text-white flex justify-around items-center'>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>Intelligent insurance</h3>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>La La LLM</h3>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>Connected numbers</h3>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>26.2 miles of building on Belief</h3>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>Don't Make it meta-worse</h3>
                    <h3 className=' w-1/12 flex justify-center items-center text-center'>Virtual worlds, real privacy concerns</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
