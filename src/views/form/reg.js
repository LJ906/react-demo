import React from 'react';
import moment from 'moment';
import { Form, Icon, Input, Switch, Checkbox, Card,Upload,
    Button, Select,InputNumber, DatePicker, Radio 
} from 'antd';
import './index.less';
 const RadioGroup = Radio.Group
const { Option } = Select;
const {TextArea} = Input;

class Reg extends React.Component {

    state = {
        // 初始化表单数据
        addForm  : {
            userName: 'username',
            gender: 1,

        },
        imageUrl: ''
    }
    getBase64 = (img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    onRadioGroupChange =(e) => {
        console.log('radio', e.target.value);
    }
    // 上传成功前的校验
    beforeUpload = (file)=> {
        console.log('beforeupload', file)
    }
    // 上传文件
    handleUploadChange = ({file, fileList})=> {
        console.log('handleUploadChange file', file)
        console.log('handleUploadChange fileList', fileList)
        if (file.status === 'done') {

            // 后台会返回一个图片地址，直接复制给state.imageUrl无需使用base64
            // file.originFileObj 是文件对象
            // 返回一个文件对象转成base64
            this.getBase64(file.originFileObj, imageUrl => this.setState({
                imageUrl,
                // loading: false
            }))
        }

    }

    // 提交
    handleSubmit =()=> {
        const addForm = this.props.form.getFieldsValue();
        console.log('addForm', addForm)

        this.props.form.validateFieldsAndScroll((err, values) => {
            // values 是拿到表单中的用户填写的数据
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render () {
        const {getFieldDecorator} = this.props.form;
        // label的样式
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 }, // 超小屏label占的份数
              sm: { span: 4 },  // 小屏幕label占的份数
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 4,
                },
            },
        };

        // 上传头像的
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                {/* <div className="ant-upload-text">Upload</div> */}
            </div>
        );

        

        return (
            <div>
                <Card title="注册" bordered={false}>
                    <Form
                        name="registerForm"        
                        {...formItemLayout}
                    >
                        <Form.Item
                            label="姓名"   
                            >
                             {getFieldDecorator('userName', {
                                initialValue: 'initialValue',
                                rules: [
                                     {required: true, message: '请输入姓名'}
                                ],
                            })(
                                <Input />
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="性别"                        
                            >
                             {getFieldDecorator('gender', {
                                initialValue: 1,
                                rules: [
                                     {required: true, message: '请选择性别'}
                                ],
                            })(
                                <RadioGroup onChange={this.onRadioGroupChange}  >
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                              </RadioGroup>
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="年龄"                        
                            >
                             {getFieldDecorator('age', {
                                initialValue: 18,
                            })(
                                <InputNumber/>
                            )}                              
                         </Form.Item>

                         <Form.Item
                            label="当前状态"                        
                            >
                             {getFieldDecorator('state', {
                                initialValue: "1",
                            })(
                                <Select >
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">创业少年</Option>
                                    <Option value="3">才子一枚</Option>
                                    <Option value="4">才华横溢</Option>
                                    <Option value="5">死肥宅</Option>
                                </Select>
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="爱好"                        
                            >
                             {getFieldDecorator('interest', {
                                initialValue: ['1', '5']
                            })(
                                <Select mode="multiple">
                                    <Option value="1">游泳</Option>
                                    <Option value="2">足球</Option>
                                    <Option value="3">跑步</Option>
                                    <Option value="4">麦霸</Option>
                                    <Option value="5">死肥宅</Option>
                                </Select>
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="是否已婚"   
                            // {...tailFormItemLayout}                     
                            >
                             {getFieldDecorator('married', {
                                initialValue: true,
                                valuePropName: 'checked'
                            })(
                                // <Checkbox>是否已婚</Checkbox>
                                <Switch></Switch>
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="生日"                        
                            >
                             {getFieldDecorator('birthday', {
                                initialValue: moment('2009-2-2'),                                
                            })(
                                <DatePicker showTime format="YYYY-MM-DD"></DatePicker>
                            )}                              
                         </Form.Item>
                         <Form.Item
                            label="地址"                        
                            >
                             {getFieldDecorator('address', {
                                initialValue:  '默认地址',                                
                            })(
                                <TextArea ></TextArea>
                            )}                              
                         </Form.Item>           

                        <Form.Item
                            label="上传文件"                        
                        >
                            {getFieldDecorator('avatar')(                        
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload={this.beforeUpload}
                                    onChange={this.handleUploadChange}
                                >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadButton}
                                </Upload>

                            )}                              
                         </Form.Item>
                         <Form.Item
                            {...tailFormItemLayout}                      
                        >
                            {getFieldDecorator('avatar', {
                                initialValue: true,
                                valuePropName: 'checked',
                                rules: [
                                    {required: true, message: '请选择上传文件'}
                                ],                              
                            })(
                        
                               <Checkbox>已阅读协议</Checkbox>

                            )}                              
                         </Form.Item>

                         <Form.Item {...tailFormItemLayout} >
                               <Button type="primary" onClick={this.handleSubmit}>提交</Button>                                                   
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create({ name: 'registerForm' })(Reg)