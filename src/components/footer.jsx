import React from 'react'
import '../styles/footer.css'
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
export default function footer() {
  return (
    <>
    <hr />
    <div className='parent-footer-div flex py-8 flex-col justify-center items-center' id='show-hide'>
        <div className='main-footer-section flex flex-col'>
            <div className='flex flex-row justify-between items-start'>
                <div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Industries</h1>
                    <a href="" className='text-slate-300'>Banking</a>
                    <a href="" className='text-slate-300'>Capital Markets</a>
                    <a href="" className='text-slate-300'>Consumer Goods and Distribution</a>
                    <a href="" className='text-slate-300'>Communications, Media, and Information Services</a>
                    <a href="" className='text-slate-300'>Education</a>
                   
                </div>
                <div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Services</h1>
                    <a href="" className='text-slate-300'>Banking</a>
                    <a href="" className='text-slate-300'>Capital Markets</a>
                    <a href="" className='text-slate-300'>Consumer Goods and Distribution</a>
                    <a href="" className='text-slate-300'>Communications, Media, and Information Services</a>
                    <a href="" className='text-slate-300'>Education</a>
                </div><div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Products and Platforms</h1>
                    
                    <a href="" className='text-slate-300'>Banking</a>
                    <a href="" className='text-slate-300'>Capital Markets</a>
                    <a href="" className='text-slate-300'>Consumer Goods and Distribution</a>
                    <a href="" className='text-slate-300'>Communications, Media, and Information Services</a>
                    <a href="" className='text-slate-300'>Education</a>
                </div><div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Insights</h1>
                   
                    <a href="" className='text-slate-300'>Banking</a>
                    <a href="" className='text-slate-300'>Capital Markets</a>
                    <a href="" className='text-slate-300'>Consumer Goods and Distribution</a>
                    <a href="" className='text-slate-300'>Communications, Media, and Information Services</a>
                    <a href="" className='text-slate-300'>Education</a>
                    
                </div>
                
            </div>
        </div>
    </div>
    <div className='mobile-footer py-6 bg-black flex flex-col justify-center items-center'>
        <div className='top-moblie-links'>
            {/* //use icons here thats imported on top */}
            

            <div className='flex w-full flex-row justify-between items-center text-white gap-14 text-lg'>
                <a href=""><ImFacebook /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><CiInstagram /></a>
                <a href=""><RiYoutubeLine /></a>
                <a href=""><IoLogoLinkedin /></a>
            </div>
        </div>

        <div className="mobile-upper-links flex flex-col w-full justify-start items-start text-white gap-5 mt-8" id='upper-all-links'>

                <a href="" className='ml-8'>Privacy Notice</a>
                <a href="" className='ml-8'>Cookie Policy</a>
                <a href="" className='ml-8'>Privacy Policy</a>
                <a href="" className='ml-8'>Desclaimer</a>
                <a href="" className='ml-8'>Security Policy</a>
                <a href="" className='ml-8'>California Notice at Collection</a>
                <a href="" className='ml-8'>Customize Cookies</a>
                <h3 className='text-slate-300 mt-4 ml-8'>©2024 services Limited</h3>
            </div>
    </div>
    </>
  )
}
