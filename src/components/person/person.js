import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import PersonLogin from './syh_person_afterLogin';
class Person extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={PersonLogin}/>
                </div>
            </Router>
        )
    }
}

export default Person;