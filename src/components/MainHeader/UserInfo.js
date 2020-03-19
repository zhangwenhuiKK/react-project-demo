import React from 'react';
import { connect } from 'react-redux'
import {  Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/user/action'
import './style.less';

const UserInfo = ({ UserState:{ username} }) => {
  const history = useHistory()
  const MenuOverLay = (
    <Menu>
      <Menu.Item>
          <span className='user-logout' onClick={e => logout({'cb': () => history.push('/auth')})}>
            退出登录
          </span>
        </Menu.Item>
    </Menu>
  )
  return (
    <div className='header-userInfo'>    
       <Dropdown placement='bottomCenter' overlay={MenuOverLay} trigger={['click', 'hover']}>
         <div className="user-info">
            <span className="user-name">{username}</span>
        </div>
      </Dropdown>
    </div>
  );
};
const mapStateTpProps = ({ UserState }) =>  ({ UserState : UserState})
export default connect( mapStateTpProps , { logout })(UserInfo);