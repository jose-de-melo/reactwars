import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import CardInfo from './pages/CardInfo'
import Register from './pages/Register'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>

                <Route path="/cardInfo/:id">
                    <CardInfo/>
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

