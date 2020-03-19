import {  USER_LOGIN, USER_LOGOUT, USER_REGISTER } from '../types'
import { message } from 'antd'
const  login_res = { 
        'userId': 212,
        'role': 1,
        'email': '111111@qq.com',
        'token': 2342342,
}

export const login = (params, history) => {
    login_res.username = params.username
    login_res.password = params.password
    return dispatch =>  {
      //axios.post('/login', params).then(res => { }) history.push('/user/articles')
        Promise.resolve()
        .then(() => {
          dispatch({
            type: USER_LOGIN,
            payload: login_res
           }) 
           message.success(`登录成功, 欢迎您 ${login_res.username}`)
        })
        .then(() => {
          history.push('/user/articles')
        })
     
  }
}

export const register = (params, history) => {
    return dispatch => {
      //axios.post('/register', params).then(res => {})
      Promise.resolve()
      .then(() => {
         message.success('注册成功，请重新登录您的账号！')
         history.push('/auth/login')
      })     
    }
}

export const logout = (history) => ({
  type: USER_LOGOUT
})