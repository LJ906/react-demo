import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 路由组件
import App from './../App';
import NoMatch from './../views/NoMatch';
import Admin from './../admin';
import Login from './../views/login';
// ui
import MyButton from '../views/ui/buttons';
import Modals from './../views/ui/modals'; // modal message notification 这几个都是一个页面
import Loadings from './../views/ui/loadings';
import Tabs from './../views/ui/tabs';
// form
import FormLogin from './../views/form/login';
import FormRegister1 from './../views/form/register';
import FormRegister2 from './../views/form/reg';

// table
import BaseTable from './../views/table/baseTable';
import SuperTable from './../views/table/superTable';

const Dashboard = class Dashboard extends React.Component{
    render() {
        return <div>Welcome to the app</div>
    }
}

// 路由根页面
export default class IRouter extends React.Component {
    render () {
        return (
            // 这个节点是必须的 里面嵌套根节点
            <Router>                   
                <App>   
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard}></Route>  
                        <Route path="/home" render={()=> 
                            <Admin>  
                                <Switch>
                                    <Route path="/home/ui/buttons" component={MyButton}></Route>
                                    <Route path="/home/ui/modals" component={Modals}></Route>
                                    <Route path="/home/ui/loadings" component={Loadings}></Route>
                                    <Route path="/home/ui/messages" component={Modals}></Route>
                                    <Route path="/home/ui/notification" component={Modals}></Route>
                                    <Route path="/home/ui/tabs" component={Tabs}></Route>
                                    <Route path="/home/form/login" component={FormLogin}></Route>
                                    <Route path="/home/form/regeister" component={FormRegister1}></Route>
                                    <Route path="/home/form/reg" component={FormRegister2}></Route>
                                    <Route path="/home/table/basic" component={BaseTable}></Route>
                                    <Route path="/home/table/high" component={SuperTable}></Route>
                                    <Route component={Dashboard}></Route> 
                                </Switch>
                            </Admin> 
                        }></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </App>
            </Router>
        );
    }
}