import React from 'react';
 import { Link } from 'react-router-dom';
import Main from '../route1/main';
import About from '../route1/about';
import Topics from '../route1/topics';
 
// 路由根页面
export default class Home extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
           
                <div>               
                    <ul>
                        <li>
                            <Link to="/main">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/* 路由匹配到的组件会加载到这里 这里相当于视口 */}
                    {this.props.children}                     
                </div>
        
        )
    }
}