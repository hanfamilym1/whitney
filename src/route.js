import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Work from './Components/Work/Work'
import Burger from './Components/Work/Burger/Burger'
import Strava from './Components/Work/Strava/Strava'
import Swiffer from './Components/Work/Swiffer/Swiffer'

export default
   
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/work/' component={Work}/>
            <Route path='/work/:project' component={Work}/>
            <Route path='/work/burger' component={Burger}/>
            <Route path='/work/strava' component={Strava}/>
            <Route path='/work/swiffer' component={Swiffer}/>
        </Switch>
   