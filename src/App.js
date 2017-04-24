import React, {Component} from 'react';
import './App.css';

//npm install react-route-dom
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'

import './components/syh_person';
import Person from './components/syh_person';

class Page extends Component {
    render() {
        return (
            <div>
                <Person/>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Page/>
            </div>
        );
    }
}

// npm run start
export default App;
