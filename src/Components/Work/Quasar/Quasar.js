import React, { Component } from 'react'
import './Quasar.css'
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
// import img11 from './img11.jpg'
// import img12 from './img12.jpg'
// import img13 from './img13.jpg'
// import img14 from './img14.jpg'
// import img15 from './img15.jpg'
// import img16 from './img16.jpg'
// import img17 from './img17.jpg'
// import img18 from './img18.jpg'
// import img19 from './img19.jpg'
// import img20 from './img20.jpg'


class Quasar extends Component {
    render() {

        return (
            <div>
                <div className='Quasar'>
                    <div className='quasar-flex'>
                        <div className='quasar-title'>
                            <h1>Quasar</h1>
                        </div>
                        <div class='quasar-videos'>
                            <div class='quasar-video'>
                                {/* <h1>The Talk</h1> */}
                                <iframe src="https://player.vimeo.com/video/305655384" width="400" height="300" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                            </div>
                        </div>
                        <h2>Behind the Scenes</h2>
                        <div class='quasar-middle'>
                            <div class='quasar-carousel'>
                                <Carousel
                                    showArrows
                                    infiniteLoop
                                    autoPlay
                                    emulateTouch>
                                    <div class='quasar-pic'><img src={img1} /></div>
                                    <div class='quasar-pic'><img src={img2} /></div>
                                    <div class='quasar-pic'><img src={img3} /></div>
                                    <div class='quasar-pic'><img src={img4} /></div>
                                    <div class='quasar-pic'><img src={img5} /></div>
                                    <div class='quasar-pic'><img src={img6} /></div>
                                    <div class='quasar-pic'><img src={img7} /></div>
                                    <div class='quasar-pic'><img src={img8} /></div>
                                    <div class='quasar-pic'><img src={img9} /></div>
                                    <div class='quasar-pic'><img src={img10}/></div>
                                    {/* <div class='quasar-pic'><img src={img11} /></div>        <div class='quasar-pic'><img src={img12} /></div>  */}
                                     {/* <div class='quasar-pic'><img src={img13} /></div> 
                                     <div class='quasar-pic'><img src={img14}/></div> 
                                     <div class='quasar-pic'><img src={img15} /></div> 
                                     <div class='quasar-pic'><img src={img16} /></div> 
                                     <div class='quasar-pic'><img src={img17} /></div> 
                                     <div class='quasar-pic'><img src={img18} /></div> 
                                     <div class='quasar-pic'><img src={img19} /></div> 
                                     <div class='quasar-pic'><img src={img20} /></div>  */}
                                </Carousel>
                            </div>
                            <div className='quasar-info'>
                                <h4>Art Directors: Alexa Spiroff, Amy Nea</h4>
                                <h4>Jr. Art Director: Evelyn Harper</h4>
                                <h4>Director/Editor: Stephen Smith</h4>
                                <h4>1st AC: Daniel Foltz</h4>
                                <h4>Producers: Whitney Merrill, Michael Palazzo</h4>
                                <h4>Gaffers: Cooper Eps, David Hulme, Hayley Shumway, Kofi Aidoo</h4>
                            </div>
                        </div>
                        <div className='quasar-learned'>
                            <h3>What I learned</h3>
                            <ul>
                                <li>How to set up lights for a production using Quasar Science lights.</li>
                                <li>Spreadsheets are the way to go when you have to keep track of 10 different sets.</li>
                                <li> An amazing breakfast for the cast and crew will lift everyone’s mood.</li>
                                <li> Sometimes you have to be the bad guy and move on to the next scene in order to keep the production on track.</li>
                            </ul>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Quasar