import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
 
import App from './../App';
 import Admin from './../admin';
 import Login from './../views/login';
 import MyButton from './../views/ui/button'
 import NoMatch from './../views/NoMatch';
// 路由根页面
export default class IRouter extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
            <Router>                   
                <App>                                     
                    <Route exact={true} path="/home" render={()=> 
                        <Admin>                            
                            <Route path="/home/ui/buttons" component={MyButton}></Route>
                            <Route component={NoMatch}></Route> 
                        </Admin> 
                    }></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route component={NoMatch}></Route>
                </App>
            </Router>
        );
    }
}