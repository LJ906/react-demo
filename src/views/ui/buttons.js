import React from 'react';
import './index.less'
import { Card, Button, Radio  } from 'antd';
const { Meta } = Card;
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

export default class MyButton extends React.Component {
    state = {
        size: 'small'
    }
    // 切换按钮大小
    onChangeSize = (e)=> {
        console.log(e);
        this.setState({
            size: e.target.value
        })
    }

    render () {
        return (
            <div className="button-wrp">
                <Card title="基础按钮button" bordered={false}  >
                    <Button type="primary" size="small">primary small</Button> 
                    <Button size="default">Default</Button>
                    <Button type="dashed" shape="circle" size="large">large</Button>
                    <Button type="danger" shape="round">Danger</Button>                     
                </Card>

                 <Card title="图形按钮" bordered={false}  >
                    <Button type="primary" icon="plus-circle" >primary small</Button> 
                    <Button type="primary" icon="setting" >primary small</Button> 
                    <Button type="primary" icon="smile" >primary small</Button> 
                    <Button type="primary" icon="loading">loading</Button> 
                    <Button type="primary" loading={true}>loading</Button> 
                </Card>

                 <Card title="按钮group" bordered={false}  >
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button>OK</Button>
                    </ButtonGroup>
                </Card>
                
                <Card title="切换按钮大小" bordered={false}  >
                <RadioGroup onChange={this.onChangeSize} value={this.state.size}>
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>           
                </RadioGroup>
                <Button type="primary" size={this.state.size}>button</Button> 
                <Button type="primary" size={this.state.size}>button</Button> 
                <Button type="primary" size={this.state.size}>button</Button> 
                </Card>


                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                    />
                </Card>
                 
               
            </div>
        )
    }
}