
import React from 'react';
import './index.less';
// 引入菜单数据
import MenuConfig from '../../config/menuConfig';
import {NavLink} from 'react-router-dom';
// 引入antd 菜单组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {
    state = {
        menuTreeNode: [],
        n: 0
    }
    // 加载前执行
    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    handleClick = (e) => {
        console.log('调用了handleClick', e);
    }

          
    // 菜单渲染 递归方法实现变量
    renderMenu = (data) => {  
        // 返回菜单的dom tree
        return data.map((item) => { 
             // 如果有children 就渲染成 SubMenu 没有则渲染成 Menu.Item
             if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}> 
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
             }
             return (<Menu.Item key={item.key} title={item.title}>
                <NavLink to={'/home' + item.key}>{item.title}</NavLink>
             </Menu.Item>) 
        })
    }

    render () {
        return (
            <div className="nav-left">  
                <div className="logo-img">
                    <img src="/assets/logo-ant.svg" alt=""/> 
                    React
                </div>           

                <Menu theme="dark" mode="vertical" onClick={this.handleClick} >
                    {this.state.menuTreeNode}
                </Menu>     
            </div>
        )
    }
}

