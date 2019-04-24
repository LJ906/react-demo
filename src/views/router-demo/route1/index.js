import React from 'react';
 import { HashRouter, Route, Link } from 'react-router-dom';
import Main from './main';
import About from './about';
import Topics from './topics';
 
// 路由根页面
export default class Home extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>

                    <hr/>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                     
                </div>
            </HashRouter>
        )
    }
}