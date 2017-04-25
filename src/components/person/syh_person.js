import React, {Component} from 'react';

import  './css/syh_person.css';
//公共组件引入s

//---tab栏
import  Menu from '../common/common';

//---我的订单
import Myorder from '../common/myorder';

//公共组件引入e
class P extends Component {
    render() {
        return (
            <div>
                <div className="syh_person_banner">
                    <div className="syh_person_tx"></div>
                    <ul className="syh_login_register">
                        <li>
                            <a href=""><span></span>登录</a>
                        </li>
                        <li>
                            <a href="">注册<span></span></a>
                        </li>
                    </ul>
                </div>
                <Myorder/>
                <Menu/>
            </div>
        )
    }
}

export default P;