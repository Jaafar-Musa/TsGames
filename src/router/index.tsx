import React from 'react'
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Landing from '../pages/Landing'
import GameRoutes from './GameRoutes'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={()=>{return <Landing/>}}/>
                <Route path="/games/:id" component={()=>{return <GameRoutes />}}/>
            </Switch>
        </Router>
    )
}

export default Routing
