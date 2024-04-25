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
                    <a href="" className='text-slate-300'>Energy, Resources, and Utilities</a>
                    <a href="" className='text-slate-300'>Healthcare</a>
                    <a href="" className='text-slate-300'>High Tech</a>
                    <a href="" className='text-slate-300'>Insurance</a>
                    <a href="" className='text-slate-300'>Life Sciences</a>
                    <a href="" className='text-slate-300'>Manufacturing</a>
                    <a href="" className='text-slate-300'>Public Services</a>
                    <a href="" className='text-slate-300'>Retail</a>
                    <a href="" className='text-slate-300'>Travel and Logistics</a>
                </div>
                <div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Services</h1>
                    <a href="" className='text-slate-300'>Artificial Intelligence</a>
                    <a href="" className='text-slate-300'>Cloud</a>
                    <a href="" className='text-slate-300'>Cognitive Business Operations</a>
                    <a href="" className='text-slate-300'>Consulting</a>
                    <a href="" className='text-slate-300'>Cybersecurity</a>
                    <a href="" className='text-slate-300'>Data and Analytics</a>
                    <a href="" className='text-slate-300'>Enterprise Solutions</a>
                    <a href="" className='text-slate-300'>IoT and Digital Engineering</a>
                    <a href="" className='text-slate-300'>Sustainability Services</a>
                    <a href="" className='text-slate-300'>TCS Interactive</a>
                    <a href="" className='text-slate-300'>TCS and AWS Cloud</a>
                    <a href="" className='text-slate-300'>TCS Enterprise Cloud</a>
                    <a href="" className='text-slate-300'>TCS and Google Cloud</a>
                    <a href="" className='text-slate-300'>TCS and Microsoft Cloud</a>
                </div><div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Products and Platforms</h1>
                    <a href="" className='text-slate-300'>TCS ADD™</a>
                    <a href="" className='text-slate-300'>TCS BaNCS™</a>
                    <a href="" className='text-slate-300'>TCS BFSI Platforms</a>
                    <a href="" className='text-slate-300'>TCS CHROMA™</a>
                    <a href="" className='text-slate-300'>TCS Customer Intelligence & Insights™</a>
                    <a href="" className='text-slate-300'>TCS ERP on Cloud</a>
                    <a href="" className='text-slate-300'>ignio™</a>
                    <a href="" className='text-slate-300'>TCS HOBS™
</a>
                    <a href="" className='text-slate-300'>TCS Intelligent Urban Exchange™
</a>
                    <a href="" className='text-slate-300'>TCS OmniStore™
</a>
                    <a href="" className='text-slate-300'>TCS Optumera™
</a>
                    <a href="" className='text-slate-300'>TCS TAP™
</a>
                    <a href="" className='text-slate-300'>Quartz™ – The Smart Ledgers™
</a>
                    <a href="" className='text-slate-300'>TCS TwinX™
</a>
                    <a href="" className='text-slate-300'>TCS MasterCraft™
</a>
                    <a href="" className='text-slate-300'>Jile™</a>
                    <a href="" className='text-slate-300'>TCS iON™</a>
                </div><div className='each-footer-row'>
                    <h1 className='text-slate-400 text-2xl mb-4'>Insights</h1>
                    <a href="" className='text-slate-300'>Customer Stories
</a>
                    <a href="" className='text-slate-300'>Cloud
</a>
                    <a href="" className='text-slate-300'>Blockchain
</a>
                    <a href="" className='text-slate-300'>IoT
</a>
                    <a href="" className='text-slate-300'>Metaverse
</a>
                    <a href="" className='text-slate-300'>Future of Work
</a>
                    <a href="" className='text-slate-300'>Health and Wellness
</a>
                    <a href="" className='text-slate-300'>Sustainability
</a>
                    <a href="" className='text-slate-300'>TCS.AI
</a>
                    <a href="" className='text-slate-300'>Cybersecurity
</a>
                    <a href="" className='text-slate-300'>Perspectives
</a>
                    <a href="" className='text-slate-300'>Careers
</a>
                    <a href="" className='text-slate-300'>Corporate Social Responsibility
</a>
                    <a href="" className='text-slate-300'>Diversity, Equity, and Inclusion
</a>
                    <a href="" className='text-slate-300'>Investor Relations</a>
                    <a href="" className='text-slate-300'>Sports Sponsorships
</a>
                    
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
                <h3 className='text-slate-300 mt-4 ml-8'>©2024 TATA Consultancy Services Limited</h3>
            </div>
    </div>
    </>
  )
}
