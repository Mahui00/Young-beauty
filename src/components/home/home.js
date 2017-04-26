import React, {Component} from 'react';

import PersonTitle from '../common/persontitle';

class Home extends Component{
    render(){
        return(
            <div>
                <PersonTitle title="我的订单" add="syh_empty"/>
            </div>
        )
    }
}

export  default Home;