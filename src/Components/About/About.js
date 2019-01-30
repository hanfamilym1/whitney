import React, { Component } from 'react'
import './About.css'
import photo from './whitney.jpg'
class About extends Component {
    render() {

        return (
            <div class='About'>
                <div class='photo animated slideInDown'>
                    <img src={photo} alt='Whitney Merrill' width='300'/>
                </div>
                <div class='about-me animated slideInDown'>
                    <h4 class='text-center'>Making lists is my jam, so here's a list about me:</h4>
                    <ol>
                        <li>I will never turn down a dare.</li>
                        <li>I love gifs.</li>
                        <li>Someone once told me that I should be the brand ambassador for Moleskine notebooks. </li>
                        <li>I’m always down for trying new things.</li>
                        <li>Gilmore Girls is my go to when I need something to keep me up late.</li>
                        <li>I am a twin.</li>
                        <li>Uniqlo pens are my favorite.</li>
                        <li>Physical planners are better than electronic.</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default About