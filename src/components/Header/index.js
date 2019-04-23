import React from "react";
import { Row, Col } from "antd";
import './index.less';

import Utils from '../../utils/utils'

export default class Header extends React.Component {
    state = {
        user: {
            userName: '权利的游戏'
        }, 
        sysTime: ''
    }
    // 挂载前
    componentWillMount () {
       
        setInterval(()=> {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }

    render () {
        const {userName} = this.state.user
        return (
            <div className="my-header-wrp">
                <Row  className="my-header-top">
                    <Col span={24} align="right">
                        <span>您好，{userName}</span>
                        <img className="avatar-img" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2860924871,2164658626&fm=58&bpow=1240&bpoh=1754" alt=""/>


                        <a href="#" className="log-out"> 退出</a>
                    </Col>
                </Row>
                <hr className="hr"/>
                <Row  className="bread-crumb">
                    <Col span={20} >
                        面包屑
                        
                    </Col>
                    <Col span={4} align="right">
                        {this.state.sysTime}                       
                    </Col>
                </Row>
            </div>
        )
    }
}