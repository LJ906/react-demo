import React from 'react';
import './index.less';
import { Form, Icon, Input, Button, Checkbox, Card,
} from 'antd';
const { TextArea, Search } = Input;

class FormLogin extends React.Component {

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });        
    }

 

    render () {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
         return (
            <div>
                <Card title="密码框" bordered={false} style={{marginBottom: '10px',width: 400}}>
                <Input allowClear value="value" defaultValue="value"></Input>
                    <Input.Password placeholder="input password" />
                </Card>  
                <Card title="Search输入框" bordered={false}  style={{marginBottom: '10px'}}>
                    <p>默认框</p>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    /> 
                    <br/><br/>
                    <p>enterButton</p>
                    <Search
                        style={{ width: 200 }}
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    <br/><br/>
                    <p>enterButton="Search"</p>
                    <Search
                        style={{ width: 400 }}
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </Card>

                <Card title="textarea 多行文本域" bordered={false}>
                    <TextArea rows={4} />
                </Card>
                <Card title="form 登录" bordered={false}>
                    <Form className="form-wrp" onSubmit={this.handleSubmit} >
                        <Form.Item >                        
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>                        
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>     
                            <Checkbox>Remember me</Checkbox>                  
                            <a className="login-form-forgot" href="https://www.baidu.com">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="https://www.baidu.com">register now!</a>
                        </Form.Item>
                    </Form>
                </Card>

                <Card title="form 校验" bordered={false} style={{marginBottom: '10px'}}>
                    <Form 
                        className="form-wrp" 
                        style={{width: 400}} 
                        // 设置label的宽度
                        {...formItemLayout}
                        onSubmit={this.handleSubmit}
                    > 
                        <Form.Item label="姓名" > 
                        {
                          getFieldDecorator('userName', {
                              initialValue: 'AAAA',
                              rules:[{required: true, message: '请输入数据！'},
                            // {pattern: new RegExp('^\W+$', 'g'), message: '用户名必须以字母开头'}
                        ]
                          })(
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                          )}                       
                        </Form.Item>
                        <Form.Item label="密码">
                        {
                          getFieldDecorator('password', {
                              rules:[{required: true, message: '请输入数据！'}]
                          })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                           )} 

                        </Form.Item>
                        <Form.Item>     
                        {getFieldDecorator('remember', {
                            initialValue: true,
                            valuePropName: 'checked',
                           
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}                  
                            <a className="login-form-forgot" href="https://www.baidu.com">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="https://www.baidu.com">register now!</a>
                        </Form.Item>
                    </Form>
                </Card>

                      
            </div>
        )
    }
}

export default Form.create()(FormLogin)