import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image
import ycgo from "/ycgo.png"
import yone from "/y1.png"
import ytwo from "/y2.png"
import ythree from "/y3.png"
import yfour from "/y4.png"


function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className='section-hero'>
                    <div className='wrapper'>
                        <div className='container-hero flex items-center gap-52 '>
                            <div>
                                <h1 className='hero-main-text'>Private browsing enabling <br /> with YcGO</h1>
                                <p className='sub-text mb-11'>Private browser enabling members to earn through consensus-governed browsing for uncensorable experiences with live support and debate.</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>


                            <div className='hero-img'>
                                <img src={yone} alt="" className='yone' />
                                <img src={ytwo} alt="" className='ytwo'/>
                                <img src={ythree} alt="" className='ythree'/>
                                <img src={yfour} alt="" className='yfour'/>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home