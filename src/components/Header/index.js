import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import './index.less';

import Utils from '../../utils/utils'
import axios from "../../axios";
export default class Header extends React.Component {
    state = {
        user: {
            userName: '权利的游戏',
            avatar: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2860924871,2164658626&fm=58&bpow=1240&bpoh=1754" 
        },  
        sysTime: '', // 系统时间
        weather:  { // 天气
            // date: "周三 04月24日 (实时：18℃)",
            // dayPictureUrl: "http://api.map.baidu.com/images/weather/day/xiaoyu.png",
            // nightPictureUrl: "http://api.map.baidu.com/images/weather/night/xiaoyu.png",
            // temperature: "19 ~ 9℃",
            // weather: "小雨",
            // wind: "东北风4-5级"
        }
    }
    // 挂载前
    componentWillMount () {
       // 系统时间计时器
        setInterval(()=> {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)

        // 获取天气
        this.getWeatherAPIData ();
    }

    // 天气api
    getWeatherAPIData () {
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{            
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    weather: data
                })
            }
        })
    }


    render () {
        const {userName, avatar} = this.state.user;
        const {dayPictureUrl,temperature, weather, wind} = this.state.weather 
        return (
            <div className="my-header-wrp">
                <Row  className="my-header-top">
                    <Col span={24} align="right">
                        <span>您好，{userName}</span>
                        <img className="avatar-img" src={avatar} alt=""/>
                        <a href="#" className="log-out"> 退出</a>
                    </Col>
                </Row>
                 
                <Row className=" bread-wrp">
                    <Col span={12}>
                        <Breadcrumb separator=">" className="bread-crumb">
                            <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col span={6} align="right">{this.state.sysTime}</Col> 
                    <Col span={6} align="right" className="weather">
                        <img src={dayPictureUrl} alt=""/>
                        <span>{weather}</span> 
                        <span>{temperature}</span>  
                        <span>{wind}</span>                     
                    </Col>
                </Row>
            </div>
        )
    }
}