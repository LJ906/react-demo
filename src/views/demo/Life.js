import React from 'react'
import Children from "./chidren";
export default class Life extends React.Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick () {
        // 构造函数中普通函数的this 指向window 吧，而这里没有window中没有所有会提示 this为undefined。 
        //  而我们希望这里的this 指向构造函数自己的方法 所以需要改this指向组件， 
        // 方法一，方法通过箭头函数定义
        // 方法2： 调用方法的时候改变this 指向，指向组件 this.handleClick.bind(this)
     
        console.log('点击了handleClick', this);
         this.setState({
            count: 1 + this.state.count
        })
    }

    handleAdd = () => {
        console.log('点击handleClick 中的this：', this);
         this.setState({
            count: 1 + this.state.count
        })
    }

    render () {
        // 为啥render里的this 指的是组件本身     
        return (
        <div>
            <div>react 生命周期介绍</div>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <button onClick={this.handleAdd}>点击一下add</button>
            <p>{this.state.count}</p>
            <Children count={"children 接受的cout ====" + this.state.count}/>   
        </div>)
        
    }
}