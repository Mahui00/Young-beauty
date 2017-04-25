import  React, {Component} from 'react';

import "./css/common.css";

//viewMore 查看更多 s
class ViewMore extends Component{
    render(){
        return(
            <div className="syh_viewMore">
                <div className="syh_more_inner">
                    <h1 className="syh_title">查看更多</h1>
                    <div className="syh_main">
                        <ul>
                            <li>
                                <a href="">
                                    <span className="syh_shop"></span>
                                    购物车
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="syh_collect"></span>
                                    我的收藏
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="syh_timeLine"></span>
                                    时光轴
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="syh_address"></span>
                                    收货地址
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="syh_contact"></span>
                                    联系我们
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="syh_set"></span>
                                    设置
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
//viewMore 查看更多 e

export default ViewMore;