import React, { Component } from 'react'
import './Work.css'
import { Link } from 'react-router-dom'
import Burgerpic from './Burger.jpg'
import Quasarpic from './Quasar.jpg'
import Stravapic from './Strava1.jpg'
import Swifferpic from './Swiffer.jpg'

class Work extends Component {
    constructor(props) {
        super(props)

    }
    render(props) {
        return (
            <div class='work'>
                <div class='work-slider'>
                    <div class='work-slide'>
                        <img src={Burgerpic} width='400'/>
                        {/* <Link to='/work/burger'><button>Burger King</button></Link> */}
                    </div>
                    <div class='work-slide'>
                        <img src={Stravapic} width='400'/>
                        {/* <Link to='/work/strava'><button>Strava</button></Link> */}
                    </div>
                    <div class='work-slide'>
                        <img src={Swifferpic} width='400'/>
                        {/* <Link to='/work/swiffer'><button>Swiffer</button></Link> */}
                    </div>
                    <div class='work-slide'>
                        <img src={Quasarpic} width='400'/>
                        {/* <Link to='/work/quasar'><button>Quasar</button></Link> */}
                    </div>
                </div>
                {/* <div>
                    {
                        this.props.match.params.project === 'swiffer' ?
                            <div>
                                <div class='Swiffer'>
                                    Swiffer Component
                                    <div>
                                        <h1>Swiffer</h1>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                            :
                            this.props.match.params.project === 'strava' ?
                                <div class='Strava'>
                                    Strava Component
                                <div>
                                        <h1>Strava</h1>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                                :
                                this.props.match.params.project === 'burger' ?
                                    <div class='Burger'>
                                        Burger Component
                                    <div>
                                            <h1>Burger</h1>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    :
                                    this.props.match.params.project === 'quasar' ?
                                    <div class='Quasar'>
                                        Quasar Component
                                    <div>
                                            <h1>Quasar</h1>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>:
                                    null
                    }
                </div> */}
            </div>
        )
    }
}

export default Work