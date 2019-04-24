import React from 'react';
import { Link } from 'react-router-dom';
export default class Info extends React.Component {
    componentDidMount () {
        console.log(this.props.match);
        
    }

    render () {
        return (
            <div> info
               这里是获取动态路由的地方
               <br/>
               {this.props.match.params.mainId}
            </div>
        )
    }
}