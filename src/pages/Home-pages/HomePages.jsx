import React from 'react'
import Home from '../../Components/BannerOne/Home'
import Builde from '../../Components/Builde/Builde'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import Revenue from '../../Components/new/Revenue'
import Rise from '../../Components/Rise/Rise'
import Dilver from '../../Components/SectionDilver/Dilver'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import './HomePages.css'

function HomePages() {
    return (
        <div >
        <Home/>
        <SectionTwo/>
        <Rise/>
        <Card/>
        <Dilver/>
        <Revenue/>
        <Builde/>
        </div>
    )
}

export default HomePages
