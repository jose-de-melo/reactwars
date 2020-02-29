import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import CardInfo from './pages/CardInfo'
import Register from './pages/Register'
import Home from './pages/Home'
import CardList from './pages/CardList'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/list/:category">
                    <CardList/>
                </Route>

                <Route path="/info">
                    <CardInfo/>
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

