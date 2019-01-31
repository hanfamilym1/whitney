import React, { Component } from 'react'
import './Swiffer.css'
import { Carousel } from 'react-responsive-carousel'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'

class Swiffer extends Component {
    render() {

        return (
            <div>
                <div className='Swiffer'>
                    <div className='swiffer-flex'>
                        <div className='swiffer-title'>
                            <h1>Swiffer</h1>
                        </div>
                        <div class='swiffer-videos'>
                            <div class='swiffer-video'>
                                <iframe src="https://player.vimeo.com/video/305390910" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                        </div>
                        <h2>Behind the Scenes</h2>
                        <div class='swiffer-middle'>
                            <div class='swiffer-carousel'>
                                <Carousel
                                    showArrows
                                    infiniteLoop
                                    autoPlay
                                    emulateTouch>
                                    <div class='swiffer-pic'><img src={img1} /></div>
                                    {/* <div class='swiffer-pic'><img src={img2} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img3} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img4} /></div> */}
                                    <div class='swiffer-pic'><img src={img5} /></div>
                                    {/* <div class='swiffer-pic'><img src={img6} /></div> */}
                                    <div class='swiffer-pic'><img src={img7} /></div>
                                    {/* <div class='swiffer-pic'><img src={img8} /></div> */}
                                    <div class='swiffer-pic'><img src={img9} /></div>
                                    {/* <div class='swiffer-pic'><img src={img10}/></div> */}
                                    {/* <div class='swiffer-pic'><img src={img11} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img12} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img13} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img14}/></div> */}
                                    {/* <div class='swiffer-pic'><img src={img15} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img16} /></div> */}
                                    {/* <div class='swiffer-pic'><img src={img17} /></div> */}
                                </Carousel>
                            </div>
                            <div className='swiffer-info'>
                                <h4>Art Director: Rachel Findlay</h4>
                                <h4>Copywriter: Greg Ballif</h4>
                                <h4>Director / Editor: Caroline Burke</h4>
                                <h4>Producer: Whitney Merrill</h4>
                                <h4>Director of Photography: Trevor Free</h4>
                            </div>
                        </div>
                        <div className='swiffer-learned'>
                            <h3>What I learned</h3>
                            <ul>
                                <li>To be flexible and stay calm when problems arise. It doesn’t help to stress about something. Focus on the solution.</li>
                                <li>Just like Santa Claus, make a list for everything and check it twice.</li>
                                <li> Almost every way to find actors in Utah Valley.</li>
                            </ul>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Swiffer