import React from 'react'
import '../styles/upper-footer.css'
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";


export default function uppernav() {
  return (
    <div className='main-footer-div flex w-full py-4 flex-col justify-center items-center'>
        <div className='main-footer py-8'>
        <div className='linne'></div>
        <div className='footer-section'>
          <div className='footer-header py-8 flex flex-col gap-4'>
            <p className='text-white font-bold uppercase'>social</p>
            <h1 className='text-white text-2xl lg:text-4xl font-thin'>Follow us for the latest updates</h1>
          </div>
          <div className='footer-links flex flex-row justify-between items-center py-8'>
            <a href="" className='flex flex-row text-white items-center gap-2 text-2xl'><h2 className='text-4xl'><ImFacebook /></h2> <h3 className='hid'>Facebook tcs</h3></a>
            <a href="" className='flex flex-row text-white items-center gap-2 text-2xl'><h2 className='text-4xl'><RiYoutubeLine /></h2> <h3 className='hid'>Youtube tcs</h3></a>
            <a href="" className='flex flex-row text-white items-center gap-2 text-2xl'><h2 className='text-4xl'><FaXTwitter /></h2> <h3 className='hid'>Twitter tcs</h3></a>
            <a href="" className='flex flex-row text-white items-center gap-2 text-2xl'><h2 className='text-4xl'><CiInstagram /></h2> <h3 className='hid'>Instagram tcs</h3></a>
            <a href="" className='flex flex-row text-white items-center gap-2 text-2xl'><h2 className='text-4xl'><IoLogoLinkedin /></h2> <h3 className='hid'>LinkedIn tcs</h3></a>
            
          </div>
        </div>
        </div>
    </div>
  )
}
