import React from 'react';
import { Link } from 'react-router-dom';
export default class Main extends React.Component {
    render () {
        return (
            <div> Main
                <Link to="/main/test-id">  路由参数/main/test-id</Link>
                <br/>
                <Link to="/main/123"> 路由参数main/123</Link>
                <br/>
                <Link to="/main/342"> 路由参数main/342</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}