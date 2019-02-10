import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const Routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/register" component={ Register }></Route>
        </Switch>
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
