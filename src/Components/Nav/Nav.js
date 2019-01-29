import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class Nav extends Component {
    render() {
        return (
            <div class='Nav'>
                <Link to='/' style={{textDecoration: 'none'}}><Button color="primary" className='nav-btn'>Home</Button></Link>
                <Link to='/about' style={{textDecoration: 'none'}}><Button color="primary" className='nav-btn'>About</Button></Link>
                <Link to='/work' style={{textDecoration: 'none'}}><Button color="primary" className='nav-btn'>Work</Button></Link>
            </div>
        )
    }
}

export default Nav