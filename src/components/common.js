import  React, {Component} from 'react';

import "../css/common/common.css";

//menu tab栏组件 s
class Menu extends Component{
    render (){
        return(
            <ul className="syh_menu">
                <li className="syh_home">
                    <a href="#">
                        <span className="syh_home_icons"> </span>首页
                    </a>
                </li>
                <li className="syh_ind">
                    <a href="#">
                        <span className="syh_ind_icons"> </span>个性化
                    </a>
                </li>
                <li className="syh_display">
                    <a href="#">
                        <span className="syh_display_icons"> </span>展吧
                    </a>
                </li>
                <li className="syh_person">
                    <a href="#">
                        <span className="syh_person_icons"> </span>个人中心
                    </a>
                </li>
            </ul>
        )
    }
}
//menu tab栏组件 e

export default Menu;