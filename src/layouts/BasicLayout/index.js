import React from 'react';
import { connect } from 'react-redux'
import { Layout } from 'antd';
import store from '../../redux/store';
import  SiderMenu from '../../components/SiderMenu'
import MainHeader from '../../components/MainHeader';
import { renderRoutes } from '@/routers/renderRoutes'
import config from '@/routers/config'
import './style.less';

const BasicLayout = ({ UserState:{role} }) => {
  console.log('role:'+role+' in Basiclayout')
  return (
    <Layout className="main-layout">
      <SiderMenu role={role}/>
      <Layout className="main-layout-right">
         <MainHeader />
        <Layout.Content className='app-main'>
           {renderRoutes(config, role)}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
const mapStateTpProps = ({ UserState }) =>  ({ UserState : UserState })

export default connect(mapStateTpProps)(BasicLayout)
