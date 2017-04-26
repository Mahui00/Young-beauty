import React, {Component} from 'react';
import "./css/common.css";

class PersonTitle extends Component{
    render(){
        return(
            <div className="syh_personTitle">
                <div className="syh_titleTop">
                    <a href="" className="syh_back"></a>
                    <div className="syh_titleCenter">
                        <span></span>
                        {this.props.title}
                        <span></span>
                    </div>
                    <a href="" className={this.props.add}></a>
                </div>
            </div>
        )
    }
}

export default PersonTitle;