import React from 'react';
import { Card, Tabs, Icon, Button, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

export default class MyTab extends React.Component {
    state = {
        tabPosition: 'left'
    }

    // 切换tabs
    handleTabsChange= (key) => {
        console.log('切换tab', key);
    }

    // 切换tab的位置
    changeTabPosition = (value) => {
        console.log('position', value);
        this.setState({
            tabPosition: value
        })
    }
    
    render () { 
        // 额外内容添加   
        const extraContent = (<Button>这是额外的内容</Button>);  


        return (
            <div className="button-wrp">    
                <Card title="基础版tab切换" bordered={false}  >
                {/*  key TabPane 唯一标识,  tab是文案title */}
                    <Tabs 
                    defaultActiveKey="1" 
                    onChange={this.handleTabsChange}
                    tabBarExtraContent={extraContent}
                    >
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="apple"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="禁用项的tab切换" bordered={false}  >
                    <Tabs defaultActiveKey="1" onChange={this.handleTabsChange}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane  tab={<span><Icon type="apple"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="切换位置" bordered={false}  >
                    <div style={{ marginBottom: 16 }}>
                        Tab position：
                        <Select
                            value={this.state.tabPosition}
                            onChange={this.changeTabPosition}
                            dropdownMatchSelectWidth={false}
                        >
                            <Option value="top">top</Option>
                            <Option value="bottom">bottom</Option>
                            <Option value="left">left</Option>
                            <Option value="right">right</Option>
                        </Select>
                    </div>

                    <Tabs defaultActiveKey="1" onChange={this.handleTabsChange} tabPosition={this.state.tabPosition}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane  tab={<span><Icon type="apple"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="自定义添减的tab标签" bordered={false}  >
                    <Tabs defaultActiveKey="1" onChange={this.handleTabsChange}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane  tab={<span><Icon type="apple"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

            </div>
        )
    }
}