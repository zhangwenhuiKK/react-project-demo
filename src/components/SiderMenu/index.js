import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Icon, Row } from 'antd';
import './style.less';
import config from '@/routers/config'



const renderMenuItem = (target, role) => {

  return target
    .filter(item => item.path && item.name )
    .filter(item => !item.path.includes('admin') || item.path.includes('admin') && role ==1)
    .map(subMenu => {
      if (subMenu.childRoutes && !!subMenu.childRoutes.find(child => child.path && child.name)) {
        return (
          <Menu.SubMenu
            key={subMenu.path}
            title={
              <div>
                {subMenu.icon && <Icon type={subMenu.icon} />}
                <span>{subMenu.name}</span>
              </div>
            }
          >
            {renderMenuItem(subMenu.childRoutes, role)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={subMenu.path}>
          <Link to={subMenu.path}>
            <span>
              {subMenu.icon && <Icon type={subMenu.icon} />}
              <span>{subMenu.name}</span>
            </span>
          </Link>
        </Menu.Item>
      );
    });
};

const SiderMenu = ({  role }) => {
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState([]);
   const username = useSelector(({UserState}) => UserState.username)
  useEffect(() => {
    const list = pathname.split('/').splice(1);
    console.log(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
    setOpenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
  }, []);

  const getSelectedKeys = useMemo(() => {
    
    const list = pathname.split('/').splice(1);
    return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
  }, [pathname]);

    
  const onOpenChange = keys => {
    setOpenKeys(keys);
  };

 
  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="main-left-slider"
    > 
    <div className = 'header-left'>
      <span className="app-name">{username}的博客</span>
    </div>
      <Menu
        mode="inline"
        theme="dark"
        style={{ paddingLeft: 0, marginBottom: 0 }}
        className="main-menu"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={getSelectedKeys}
      >
        {renderMenuItem(config, role)}
      </Menu>
    </Layout.Sider>
  );
};
export default SiderMenu