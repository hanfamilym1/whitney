import React, { Component } from 'react'
import './Swiffer.css'
class Swiffer extends Component {
    render() {

        return (
            <div class='Swiffer'>
                Swiffer Component
                <div>
                <h1>Swiffer</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IzIlR5kWU0w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Swiffer