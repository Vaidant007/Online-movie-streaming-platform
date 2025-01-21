import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/insideout.jpg'
import hero_title from '../../assets/out.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel.

                </p>
                <div className="hero-btns">
                  <button className='btn'><img src={play_icon} alt="" />Play</button>
                  <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
                <TitleCards/>
            </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Streamio"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home