import React from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import { Avatar, Layout, Menu, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <>
      <Layout className='layout'>
        <Header>
          <Link to='/'>
            <div className='logo'>
              <h1>DevPad.</h1>
            </div>
          </Link>
          <div style={{ float: 'right' }}>
            <Tooltip title='Ant User' placement='top'>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
          </div>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <main>{children}</main>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
};

export default BaseLayout;
