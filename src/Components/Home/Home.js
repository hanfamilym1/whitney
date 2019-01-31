import React, { Component } from 'react'
import './Home.css'
import StravaHome from './STRAVA.jpg'
import BurgerHome from './Burger.jpg'
import SwifferHome from './Swiffer.jpg'
import QuasarHome from './Quasar.jpg'
import { Link, } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            website: null
        }

        this.onChange = this.onChange.bind(this)
        this.onClickItem = this.onClickItem.bind(this)
        this.onClickThumb = this.onClickThumb.bind(this)
    }
    onChange(props) {
        console.log('onChange', arguments);
        console.log(props.href)
    }

    onClickItem(props) {
        // console.log('onClickItem', arguments);
        console.log(arguments[1].props.href)
        var newwebsite = arguments[1].props.href
        this.setState({
            website: newwebsite
        })


    }

    onClickThumb() {
        console.log('onClickThumb', arguments);
    }

    goBurger=()=>{
        window.location.href = '#/work/burger'
    }
    goSwiffer=()=>{
        window.location.href = '#/work/swiffer'
    }
    goStrava=()=>{
        window.location.href = '#/work/strava'
    }
    goQuasar=()=>{
        window.location.href = '#/work/quasar'
    }

    render() {

        return (
            <div class='Home'>
                
                <Carousel
                    showArrows
                    infiniteLoop
                    autoPlay
                    emulateTouch
                    onClickItem={this.onClickItem}
                    onChange={this.onChange}
                    onClickThumb={this.onClickThumb}
                >
                    <div className='home-img' onClick={this.goBurger}>
                        {/* <Link to='/work/burger'> */}
                        <img className='burger' src={BurgerHome} alt="" />
                        {/* <button className='home-btn'><a href="#/work/burger">Go to my Burger King project</a></button> */}
                        {/* </Link> */}
                    </div>
                    <div className='home-img' onClick={this.goStrava}>
                        {/* <Link to='/work/strava'> */}
                        <img className='strava' src={StravaHome} alt="" />
                        {/* <button className='home-btn'><a href='/#/work/strava'>Strava</a></button> */}
                        {/* </Link> */}
                    </div>
                    <div className='home-img' onClick={this.goSwiffer}>
                        {/* <Link to='/work/Swiffer'> */}
                        <img className='swiffer' src={SwifferHome} alt="" />
                        {/* <button className='home-btn'><a href='/#/work/swiffer'>Swiffer</a></button> */}
                        {/* </Link> */}
                    </div>
                    <div className='home-img' onClick={this.goQuasar}>
                        {/* <Link to='/work/Swiffer'> */}
                        <img className='quasar' src={QuasarHome} alt="" />
                        {/* </Link> */}
                    </div>
                </Carousel>
            </div>

        )
    }
}

export default Home