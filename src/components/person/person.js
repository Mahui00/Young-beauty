import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import P from './syh_person';
class Person extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={P}/>
                </div>
            </Router>
        )
    }
}

export default Person;