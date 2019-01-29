import React, { Component } from 'react'
import './Strava.css'
class Strava extends Component {
    render() {

        return (
            <div class='Strava'>
                Strava Component
                <div>
                <h1>Strava</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Strava