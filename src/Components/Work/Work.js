import React, { Component } from 'react'
import './Work.css'
import { Link } from 'react-router-dom'

class Work extends Component {
    constructor(props) {
        super(props)

    }
    render(props) {
        return (
            <div>
                <div>
                    <Link to='/work/burger'><button>Burger King</button></Link>
                    <Link to='/work/strava'><button>Strava</button></Link>
                    <Link to='/work/swiffer'><button>Swiffer</button></Link>
                </div>
                <div>
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
                                    <div class='Strava'>
                                        Burger Component
                                    <div>
                                            <h1>Burger</h1>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    :
                                    null
                    }
                </div>
            </div>
        )
    }
}

export default Work