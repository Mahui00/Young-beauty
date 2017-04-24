import React, {Component} from 'react';

import './components/syh_person';
import Menu from './common';

class Person extends Component{
    render(){
        return(
            <div>
                <Menu/>
                123123123
            </div>
        )
    }
}
ReactDOM.render(
    <Person/>,
    document.querySelector("#root")
);

export default Person;