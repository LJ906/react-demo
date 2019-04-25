import React from 'react';
import { Card, Spin, Alert, Switch, Icon} from 'antd';

export default class Loadings extends React.Component {
    state = { loading: false }
    // 切换开关的状态显示加载图标
    toggleSwitch = (value)=> {
        console.log('toggle',value);
        this.setState({
            loading: value
        })
    }

    render () {
        const containerNode = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="warning"
            />
        );

        const icon = <Icon type="loading"></Icon>;
        return (
            <div className="button-wrp">     
                <Card title="转圈雪花加载图标" bordered={false}  >
                    <Spin></Spin>                     
                    <Spin indicator={icon} style={{margin: '0 50px'}}> </Spin>                     
                </Card>

                <Card title="转圈雪花加载图标" bordered={false}  >
                    <Spin spinning={this.state.loading} tip="loadings">{containerNode}</Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：<Switch checked={this.state.loading} onChange={this.toggleSwitch} />
                    </div>
                </Card>

            </div>
        )
    }
}