// admin.js 主页
import React from 'react'
// 导入自定义组件
import './style/common.css';
import MyHeader from './components/Header'
import NavLeft from './components/NavLeft';
import MyFooter from './components/Footer';

// import { Row, Col } from "antd";
import { Layout } from 'antd';
const {
  Header, Footer, Sider, Content,
} = Layout;

// 导出admin 组件
export default class Admin extends React.Component {
    render () {
        return (
            <Layout className="container">
                <Sider className="nav-left">
                    <NavLeft/>
                </Sider>
                <Layout className="main">
                    <Header className="my-header">
                        <MyHeader/>
                    </Header>
                    <Content className="content">
                        content
                    </Content>
                    <Footer className="my-footer">
                        <MyFooter/>
                    </Footer>
                </Layout>
            </Layout>

            // <Row className="container">
            //     <Col span={3} className="nav-left">
            //         <NavLeft/>
            //     </Col>
                
            //     <Col span={21} className="main">
            //         <Header/>
            //         <Row className="content">
            //             content
            //         </Row>
            //         <Footer/>
                
            //     </Col>
            // </Row>
        )
    }
}