import React, { Component } from 'react'
import './Burger.css'
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
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './img17.jpg'

class Burger extends Component {
    render() {

        return (
            <div>
                <div className='Burger'>
                    <div className='burger-flex'>
                        <div className='burger-title'>
                            <h1>Burger King</h1>
                        </div>
                        <div class='burger-videos'>
                            <div class='burger-video'>
                                {/* <h1>The Talk</h1> */}
                                <iframe src="https://player.vimeo.com/video/305655384" width="400" height="300" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                            </div>
                            <div class='burger-video'>
                                {/* <h1>The Girl's Room</h1> */}
                                <iframe src="https://player.vimeo.com/video/305655284" width="400" height="300" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                            </div>
                        </div>
                        <h2>Behind the Scenes</h2>
                        <div class='burger-middle'>
                            <div class='burger-carousel'>
                                <Carousel
                                    showArrows
                                    infiniteLoop
                                    autoPlay
                                    emulateTouch>
                                    <div class='burger-pic'><img src={img1} /></div>
                                    <div class='burger-pic'><img src={img2} /></div>
                                    <div class='burger-pic'><img src={img3} /></div>
                                    <div class='burger-pic'><img src={img4} /></div>
                                    {/* <div class='burger-pic'><img src={img5}/></div> */}
                                    <div class='burger-pic'><img src={img6} /></div>
                                    <div class='burger-pic'><img src={img7} /></div>
                                    {/* <div class='burger-pic'><img src={img8}/></div> */}
                                    <div class='burger-pic'><img src={img9} /></div>
                                    {/* <div class='burger-pic'><img src={img10}/></div> */}
                                    <div class='burger-pic'><img src={img11} /></div>
                                    <div class='burger-pic'><img src={img12} /></div>
                                    <div class='burger-pic'><img src={img13} /></div>
                                    {/* <div class='burger-pic'><img src={img14}/></div> */}
                                    <div class='burger-pic'><img src={img15} /></div>
                                    <div class='burger-pic'><img src={img16} /></div>
                                    <div class='burger-pic'><img src={img17} /></div>
                                </Carousel>
                            </div>
                            <div className='burger-info'>
                                <h4>Art Director: Evan Kirby</h4>
                                <h4>Jr. Art Director: Jennie Ellsworth</h4>
                                <h4>Copywriter: Greg Ballif</h4>
                                <h4>Director of Photography: Katie Baker</h4>
                                <h4>Producer: Whitney Merrill</h4>
                                <h4>Art Director: Evan Kirby</h4>
                                <h4>Sound Designer / Editor: Zach Olsen</h4>
                            </div>
                        </div>
                        <div className='burger-learned'>
                            <h3>What I learned</h3>
                            <ul>
                                <li>A crash course into what a producer does.</li>
                                <li>What can go wrong, will go wrong. Always, always, always have a back up plan.</li>
                                <li>“Wake your client up and put them to bed.” Always be checking up with your team by clearly communicating what needs to be done and what we have accomplished..</li>
                                <li>80s fashion is the best.</li>
                                <li>Plan for more prep time than you think. That will make the shooting process go smoother and quicker. </li>
                                <li>The more detailed a call sheet, the better.</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Burger