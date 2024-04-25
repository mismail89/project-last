import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Sec from '../components/sec'
import Baner from '../components/baner'
import Links from '../components/links'
import Cardssection from '../components/cards-section'
import Slides from '../components/slides'
import Prodductslinks from '../components/products-links'
import Uppernav from '../components/upper-footer'
import Footer from '../components/footer'
export default function home() {
  return (
    <>
    {/* <Navbar /> */}
    <Slider />
    <Sec />
    <Baner />
    <Links />
    <Cardssection />
    <Prodductslinks />
    <Slides />
    <Uppernav />
    <Footer />
    </>
  )
}
