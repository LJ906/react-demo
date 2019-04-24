import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main';
import Info from './info';
import Topics from '../route1/topics';
import About from '../route1/about';
import Home from './home';
import NoMatch from './noMatch';
 
// 路由根页面
export default class IRouter extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
            <Router>
                <div>   
                    <Home>
                        <Switch>
                            <Route  path="/main" render= {()=>  
                                <Main>
                                    <hr/>
                                    <Route path="/main/:mainId" component={Info}></Route>
                                </Main>
                            }></Route>
                            <Route path="/about" component={About}></Route>
                            <Route path="/topics" component={Topics}></Route>
                            <Route  component={NoMatch}></Route>
                        </Switch>
                    </Home>
                </div>
            </Router>
        )
    }
}