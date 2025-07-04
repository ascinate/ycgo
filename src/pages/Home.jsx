import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';


import yone from "/y1.svg"
import ytwo from "/y2.svg"
import ythree from "/y3.png"
import yfour from "/y4.svg"


function Home() {
    
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
        setTimeout(() => setShow(false), 3000); 
    };

    const styles = {
        notification: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#e0b859',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 1000,
        }
     };

    return (
        <>
        <div className='top-bar float-left w-full'>
            <CustomCursor/>
            <Navbar />
            <main className='float-left w-full'>
                <section className='section-hero'>
                    
                        <div className='container-hero relative'>
                            <div className='banner-tms01'>
                                <h1 className='hero-main-text'>Private <span> browsing <svg width="300" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M275.982 1.4409C269.424 1.12484 262.867 0.892429 256.309 0.622849C254.145 0.529889 251.971 0.529918 249.807 0.483438C245.111 0.381188 240.414 0.288218 235.717 0.185959C233.104 0.130186 230.482 0.0651215 227.87 0.0186415C227.107 0.00934547 226.357 3.05176e-05 225.594 3.05176e-05C223.891 3.05176e-05 222.186 0.0185935 220.483 0.0278895C212.737 0.0371855 204.98 0.0464995 197.234 0.0464995C195.384 0.0464995 193.546 0.0836815 191.696 0.102274C187.122 0.148754 182.561 0.204559 177.998 0.251039C172.842 0.306819 167.696 0.325359 162.54 0.436918C154.2 0.604239 145.872 0.780908 137.531 0.948238C132.7 1.0505 127.88 1.10624 123.048 1.26427C114.731 1.54315 106.424 1.81274 98.1069 2.08232C93.567 2.23106 89.0159 2.35193 84.4759 2.56573C75.8782 2.96546 67.2803 3.35586 58.6825 3.75559C54.0866 3.9694 49.4906 4.12743 44.9058 4.45279C36.3417 5.05703 27.7888 5.66128 19.2246 6.26552C17.3749 6.39566 15.5254 6.52579 13.6758 6.65593C9.97655 6.91622 6.29982 7.32527 2.61185 7.66922C2.37644 7.69711 2.15225 7.72501 1.91685 7.7436C1.47968 7.84586 1.08733 8.03176 0.762257 8.30134C0.280242 8.70107 0 9.25882 0 9.82592C0 10.3929 0.280242 10.9507 0.762257 11.3597C1.19943 11.7222 1.96169 12.0569 2.61185 11.9919C7.06208 11.5735 11.5011 11.1366 15.9513 10.8206C20.0877 10.5324 24.2128 10.2349 28.3493 9.94672C32.8555 9.63072 37.3618 9.31462 41.8681 8.99854C43.684 8.86839 45.5 8.70109 47.3272 8.61743C54.3557 8.29207 61.3841 7.97597 68.4125 7.65061C72.7955 7.4461 77.1785 7.25092 81.5614 7.0464C83.3774 6.96274 85.1822 6.86047 86.9981 6.79539C93.9593 6.563 100.932 6.34917 107.893 6.13536C112.119 6.00522 116.333 5.86578 120.56 5.73564C121.983 5.68916 123.396 5.63337 124.819 5.60548C132.341 5.45675 139.863 5.31734 147.384 5.1779C151.588 5.09424 155.781 5.01986 159.985 4.9362C161.475 4.90831 162.977 4.86181 164.468 4.85251C172.225 4.78744 179.982 4.7224 187.739 4.65733C192.582 4.61085 197.413 4.57365 202.256 4.58295C210.495 4.60154 218.734 4.61082 226.962 4.62941C228.588 4.62941 230.213 4.68523 231.838 4.73171C236.389 4.84327 240.929 4.9548 245.481 5.06636C248.888 5.15002 252.296 5.23364 255.715 5.31731C258.136 5.37308 260.546 5.52184 262.967 5.6334C270.085 5.94946 277.204 6.28414 284.311 6.64668C286.115 6.73964 287.92 6.85116 289.725 6.96272C291.664 7.07427 293.603 7.19512 295.531 7.37174C295.834 7.40893 296.125 7.45543 296.428 7.5112C297.191 7.64135 297.919 7.60416 298.603 7.2788C299.231 6.97204 299.701 6.46075 299.903 5.8751C300.307 4.64803 299.41 3.33726 297.93 2.99331C296.63 2.69584 295.284 2.57504 293.951 2.46349C293.032 2.38912 292.124 2.30546 291.204 2.23109C289.445 2.08236 287.674 2.00794 285.913 1.89639C282.607 1.71977 279.289 1.59893 275.982 1.4409Z" fill="#84abdb"></path>
                                             </svg> </span> <strong> enabling </strong> with YcGO</h1>
                                <p className='sub-text mb-11'>Private browser enabling members to earn through consensus-governed browsing for uncensorable experiences with live support and debate.</p>
                                <button type='button' onClick={handleClick} className='theme-color-btn brn-btn' id=''>Get Started</button>
                                <button type='button' onClick={handleClick} className='white-color-btn brn-btn' id=''>Try Demo</button>
                            </div>


                            <div className='yone'>
                                <img src={yone}  alt="man"/>
                            </div>
                            <div className='ytwo'>
                                <img src={ytwo}  alt="man"/>
                            </div>
                            <div className='ythree'>
                                <img src={ythree}  alt="man"/>
                            </div>
                            <div className='yfour'>
                                <img src={yfour}  alt="man"/>
                            </div>
                        </div>
                        <img src='/png-bckj.png' className='sm-pic' alt='bm'/>

                        {show && (
                                <div style={styles.notification}>
                                🔔 Feature coming soon!
                                </div>
                            )}

                </section>

            </main>
        </div>

        </>
    )
}

export default Home;