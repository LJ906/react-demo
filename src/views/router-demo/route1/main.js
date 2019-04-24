import React from 'react';
import { Link } from 'react-router-dom';
export default class Main extends React.Component {
    render () {
        return (
            <div> Main
                <Link to="/main/a"> a路由嵌套点击显示about组件</Link>
                {this.props.children}
            </div>
        )
    }
}