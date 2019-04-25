import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, 
} from 'antd';

export default class Login extends React.Component {

    handleSubmit= () => {
        
    }

    render () {
        return (
            <div>                
                <Card title="form 登录" bordered={false}>
                <p>lasdjflakdj</p>
                    <Form>
                        <Form.Item>                        
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>                        
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item>

                    </Form>
                </Card>
            </div>
        )
    }
}