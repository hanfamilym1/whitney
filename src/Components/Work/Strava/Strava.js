import React, { Component } from 'react'
import './Strava.css'
import { Carousel } from 'react-responsive-carousel'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'

class Strava extends Component {
    render() {

        return (
            <div>
                <div className='strava'>
                    <div className='strava-flex'>
                        <div className='strava-title'>
                            <h1>Strava</h1>
                        </div>
                        <div class='strava-videos'>
                            <div class='strava-video'>
                                {/* <h1>The Talk</h1> */}
                                <iframe src="https://player.vimeo.com/video/305655384" width="400" height="300" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                            </div>
                        </div>
                        <h2>Behind the Scenes</h2>
                        <div class='strava-middle'>
                            <div class='strava-carousel'>
                                <Carousel
                                    showArrows
                                    infiniteLoop
                                    autoPlay
                                    emulateTouch>
                                    <div class='strava-pic'><img src={img1} /></div>
                                    <div class='strava-pic'><img src={img2} /></div>
                                    <div class='strava-pic'><img src={img3} /></div>
                                    <div class='strava-pic'><img src={img4} /></div>
                                    <div class='strava-pic'><img src={img5} /></div>
                                    <div class='strava-pic'><img src={img6} /></div>
                                    <div class='strava-pic'><img src={img7} /></div>
                                    <div class='strava-pic'><img src={img8} /></div>
                                    {/* <div class='strava-pic'><img src={img9} /></div> */}
                                    {/* <div class='strava-pic'><img src={img10}/></div> */}
                                    {/* <div class='strava-pic'><img src={img11} /></div> */}
                                    {/* <div class='strava-pic'><img src={img12} /></div> */}
                                    {/* <div class='strava-pic'><img src={img13} /></div> */}
                                    {/* <div class='strava-pic'><img src={img14}/></div> */}
                                    {/* <div class='strava-pic'><img src={img15} /></div> */}
                                    {/* <div class='strava-pic'><img src={img16} /></div> */}
                                    {/* <div class='strava-pic'><img src={img17} /></div> */}
                                </Carousel>
                            </div>
                            <div className='strava-info'>
                                <h4>Art Director: Alexa Spiroff</h4>
                                <h4>Copywriter: Hannah Norton</h4>
                                <h4>Director / Editor: Stephen Smith</h4>
                                <h4>Producer: Whitney Merrill</h4>
                                <h4>1st AC: Julian Lopez</h4>
                            </div>
                        </div>
                        <div className='strava-learned'>
                            <h3>What I learned</h3>
                            <ul>
                                <li>You don’t need a huge crew to make good work.</li>
                                <li>It’s worth it to get up at 3 a.m for a beautiful shot.</li>
                            </ul>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Strava