import React, {Component} from 'react';

import  './css/syh_person_afterLogin.css';
//公共组件引入s

//---tab栏
import  Menu from '../common/common';
//---我的订单
import Myorder from '../common/myorder';
//---查看更多
import ViewMore from '../common/viewmore';
//公共组件引入e
class PersonLogin extends Component {
    render() {
        return (
            <div>
                <div className="syh_personTop">
                    <a href="#" className="syh_off">注销</a>
                    <div className="syh_personHead">
                        <div className="syh_head_img">
                            <img src={require('./images/syh_head.png')} alt="Jamie酱"/>
                        </div>
                    </div>
                    <div className="syh_userName"><span></span>Jamie酱 <span></span></div>
                    <div className="syh_person_integral">
                        <div className="syh_voucher">
                            <span></span>
                            代金券  1张
                        </div>
                        <div className="syh_int">
                            <span></span>
                            积分 10
                        </div>
                    </div>
                </div>
                <Myorder/>
                <div className="viewMore">
                    <ViewMore/>
                </div>
                <Menu/>
            </div>
        )
    }
}

export default PersonLogin;