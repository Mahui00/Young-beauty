import  React, {Component} from 'react';

import "./css/common.css";

//myorder 我的订单s
class Myorder extends Component{
    render(){
        return(
            <div className="syh_order_from">
                <div className="syh_order">
                    <h1 className="syh_title">我的订单</h1>
                    <div className="syh_content">
                        <ul className="syh_main">
                            <li>
                                <a href="">
                                    <div className="syh_iconsBox syh_color1">
                                        <span className="syh_icons syh_pay_icons1"></span>
                                        待支付
                                    </div>
                                    <div className="syh_line"></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="syh_iconsBox syh_color2">
                                        <span className="syh_icons syh_pay_icons2"></span>
                                        待收货
                                    </div>
                                    <div className="syh_line"></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="syh_iconsBox syh_color3">
                                        <span className="syh_icons syh_pay_icons3"></span>
                                        待评论
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="syh_line"></div>
                                    <div className="syh_iconsBox syh_color4">
                                        <span className="syh_icons syh_pay_icons4"></span>
                                        售后
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
//myorder 我的订单e

export default Myorder;