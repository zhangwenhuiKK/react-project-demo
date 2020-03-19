import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import { connect } from 'react-redux'
import { login } from '../../redux/user/action'
import { useDispatch } from 'react-redux'
import './style.less';


const Login = (props) => {
    const { getFieldDecorator } = props.form
    const { history} = props
    const dispatch = useDispatch() // dispatch hooks

    
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('登录信息 ', values);
            dispatch(login(values,history))
          }
        });
      };
    return  (
    <div className="page-login">
    <Form onSubmit={handleSubmit} className="login-form">
      <div className="login-title">欢迎登录后台管理系统</div>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入用户名！' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
            //
          rules: [{ required: true, message: '请输入密码！' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>记住我</Checkbox>)}
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
        <Link className="login-form-forgot" to='/auth/register'>去注册</Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>)
}
// export default Form.create()(connect(null, { login })(Login))
export default Form.create()(Login)