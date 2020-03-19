import React, { useState} from 'react'
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Icon } from 'antd';
import { register } from '../../redux/user/action'
import './style.less';


const Register = (props) => {
    const { getFieldDecorator } = props.form
    const { history} = props
    const dispatch = useDispatch() // dispatch hooks
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('注册信息 ', values);
            dispatch(register(values, history))
          }
        });
      };
 
// 确认密码
  function compareToFirstPassword(rule, value, callback) {
    const form = props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!')
    } else {
      callback()
    }
  }

    return  (
    <div className="page-login">
    <Form onSubmit={handleSubmit} className="login-form">
      <div className="login-title">欢迎注册博客系统</div>
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
        {getFieldDecorator('confirm', {
          rules: [
              { required: true, message: '再次输入密码！' },
              { validator: debounce(compareToFirstPassword, 500)}
            ],
          
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="确认密码"
          />,
        )}
      </Form.Item>
       <Form.Item>
        <Link className="login-form-forgot" to='/auth/login'>去登录</Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
      </Form.Item>
    </Form>
  </div>)
}
export default Form.create()(Register)