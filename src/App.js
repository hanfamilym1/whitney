import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import route from './route'
import { HashRouter } from 'react-router-dom'
import Whitney from '../src/Whitney.png'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Nav from './Components/Nav/Nav'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      right: false
    }
  }

  toggleDrawer = () => {
    this.setState({
      right: !this.state.right
    })
  }

  render() {
    return (
      <HashRouter>
        <div >
          <div class='header'>
            <div class='logo'>
              <a href="/"><img src={Whitney} alt="Logo" /></a>
            </div>
            <div class='nav-button'>
              <Button variant='colored' color='primary' onClick={this.toggleDrawer} className='menu-btn'>Menu</Button>

            </div>
            <Drawer className='nav-drawer' anchor="right" open={this.state.right} onClose={this.toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
                className='nav'
              >
                <Nav />
              </div>
            </Drawer>
          </div>
          <div>
            {route}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
