import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//npm install react-route-dom

//----首页
import Home from './components/home/home';

//----个人中心
import Person from './components/person/person';

// //----个性化
// import Ind from './components/ind/ind';

// //----展吧
// import Display from './components/display/display';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home}/>
                    {/*<Route path="/ind" component={Ind}/>*/}
                    {/*<Route path="/display" component={Display}/>*/}
                    <Route path="/person" component={Person}/>
                </div>
            </Router>
        )
    }
}

// npm run start
export default App;
