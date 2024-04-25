import React from 'react'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import '../styles/links.css'
import { FaArrowRight } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

import { MdHealthAndSafety } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { AiOutlineInsurance } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { MdOutlinePublicOff } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa6";


export default function links() {
  return (
    <div className='main-links-div flex mt-4 bg-white w-full justify-center items-center mb-4'>
        <div className=' w-11/12 flex flex-col'>
            <div className='flex w-full'>
                <h1 className=' text-black text-4xl ml-4 font-sans'>Select your industry. Discover our impact.</h1>
            </div>
            <div className='main-links-data flex flex-col items-center mt-8'>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><FaCircleDollarToSlot /></h2> Banking</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><CgMediaPodcast /></h2> Communications, Media, and Information Services</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><SiCoinmarketcap /></h2> Capital Markets</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiShoppingCartSimpleDuotone /></h2> Consumer Goods and Distribution</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiStudentBold /></h2> Education</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><GiMaterialsScience /></h2> 
Energy, Resources, and Utilities</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdHealthAndSafety /></h2> Healthcare</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdBiotech /></h2> High Tech</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><AiOutlineInsurance /></h2> Insurance</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><GiMaterialsScience /></h2> Life Sciences</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdOutlinePrecisionManufacturing /></h2> Manufacturing</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdOutlinePublicOff /></h2> Public Services</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiShoppingCartSimpleDuotone /></h2> Retail</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><FaPlaneDeparture /></h2> 
Travel and Logistics</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}
