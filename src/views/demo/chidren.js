import React from 'react'

export default class Children extends React.Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }
    
    componentWillMount () {
        console.log('componentWillMount');
    }
    componentDidMount () {
        console.log('componentDidMount');
    }

    componentWillReceiveProps (newProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate () {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate () {
        console.log('componentWillUpdate');
    }
    componentDidUpdate () {
        console.log('componentDidUpdate');
    }
    render () {
        // 为啥render里的this 指的是组件本身      
        return (
        <div>
            <div>Children 生命周期介绍</div>
            <p>{this.props.count}</p>
        </div>)
        
    }
}