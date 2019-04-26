import React from 'react';
import './index.less'
import { Card, Modal, Button, message } from 'antd';

export default class Modals extends React.Component {
    state = {
        modal1Visible: false,
    }
    // 显示确认弹框1

    handleConfirm = (type) => {
        console.log('type', type)
        Modal[type]({
            title: '提示',
            content: '你确定点击确定按钮了吗？',
            onOk:()=> {
                console.log('ok了');
            },
            onCancel:()=>{
                console.log('不确定按钮取消了');
            }
        })
    }

    //  普通模态框
    showModal1 = ()=> {
        this.setState({
            modal1Visible:true,
            confirmLoading: false
        })
    }

    handleModal1Ok = (confir) => {
        console.log('handleok');
        this.setState( {
            confirmLoading: true
        })

        Modal.confirm({
            title: '提示',
            content: '你确定点击确定按钮了吗？',
            onOk:()=> {
                console.log('ok了');
                this.handleModal1Cancel();
            },
            onCancel:()=>{
                console.log('不确定按钮取消了');
                this.setState( {
                    confirmLoading: false,
                })
            }
        })

    }

    handleModal1Cancel = () => {
        console.log('Cancel');
        this.setState( {
            confirmLoading: false,
            modal1Visible: false
        })
    }

    // 消息提示框
    handleMessageShow = ()=> {
        message.success('成功提示');
        message.warning('This is a message of warning');
        message.error('This is a message of error');
    }

    render () {
        const {modal1Visible, confirmLoading} = this.state;
        return (
            <div className="modals-wrp">                
                <Card title="modal模态框" bordered={false}  >
                    <Button type="primary" onClick={()=> this.handleConfirm('confirm')} >modal1基础弹框</Button> 
                    <Modal
                        title=" 基础 Modal"
                        style={{ top: 20 }}
                        // centered
                        visible={modal1Visible}
                        okText="确定"
                        cancelText="取消"
                        onOk={this.handleModal1Ok}
                        onCancel={this.handleModal1Cancel}
                        confirmLoading={confirmLoading}
                        >
                        <p>基础 Modal</p>
                        <p>基础 Modal</p>
                    </Modal>
                </Card>

                <Card title="确认框" bordered={false}  >
                    <Button type="primary" onClick={()=> this.handleConfirm('confirm')} >confirm</Button> 
                    <Button type="primary" onClick={()=> this.handleConfirm('info')} >info</Button> 
                    <Button type="primary" onClick={()=> this.handleConfirm('success')} >success</Button> 
                </Card>


                <Card title="消息提示" bordered={false}  >
                    <Button type="primary"   onClick={this.handleMessageShow}>Message消息提示</Button> 
                </Card>


            </div>
        )
    }
}