import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../route1/main';
import About from '../route1/about';
import Topics from '../route1/topics';
import Home from './home';
 
// 路由根页面
export default class IRouter extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
            <Router>
                <div>   
                    <Home>
                        <Route  path="/main" render= {()=>  
                            <Main>
                                <hr/>
                                <Route path="/main/a" component={About}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                    </Home>
                </div>
            </Router>
        )
    }
}