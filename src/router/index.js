import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home,Voting } from '../pages';
export default function index() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/voting" component={Voting} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
