import React, {  useState } from 'react';
import { connect, useDispatch } from 'react-redux'
import { Layout, Icon, Dropdown, Menu, Row, Col, Input} from 'antd';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/user/action'
import './style.less';

const MainHeader = ({ UserState:{ username} }) => {
  const history = useHistory()
  const dispatch = useDispatch() // dispatch hooks
  const [keyword, setKeyword] = useState('')
  function handleChange(e) {
    e.preventDefault()
    setKeyword(e.target.value)
  }

  function onPressEnter(e) {
    e.target.blur()
  }

  function onSubmit() {
    history.push(`/user/articles/?page=1&keyword=${keyword}`)
    setKeyword('')
  }

  function clickSearch(e) {
    e.stopPropagation()
  }
 
  const menu = 
    <Menu>
      <Menu.Item key="0">
        <Icon type="smile" />
        个人信息
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <span  onClick={e =>  {dispatch(logout(history));(history.push('/auth/login'))}}>
          <Icon type="logout" />
          &nbsp; 退出登录
        </span>
      </Menu.Item>
    </Menu>
  
  return (
    <Layout.Header className="main-header">
    <Row style={{ paddingRight: 20 }}>
      <Col id='searchbox'>
      <Icon type='search' />
      <Input
          className='search-input'
          onClick={clickSearch}
          value={keyword}
          onChange={handleChange}
          onPressEnter={onPressEnter}
          onBlur={onSubmit}
          placeholder='搜索文章'
          style={{ width: 200 }}
        />
      </Col>
      <Col style={{float:'right'}}>
        <Dropdown overlay={menu} trigger={['click', 'hover']} placement="bottomCenter">
          <div className="user-info">
            <span className="user-img" />
            <span className="user-name">{username}</span>
          </div>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
  );
};
const mapStateTpProps = ({ UserState }) =>  ({ UserState : UserState})
export default connect( mapStateTpProps)(MainHeader)