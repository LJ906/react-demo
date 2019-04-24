import React from 'react';
 import { Link } from 'react-router-dom';
 
// 路由根页面
export default class Home extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
           
                <div>               
                    <ul>
                        <li>
                            <Link to="/main">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                        <li>
                            <Link to="/nomatch">topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    {/* 路由匹配到的组件会加载到这里 这里相当于视口 */}
                    {this.props.children}                     
                </div>
        
        )
    }
}