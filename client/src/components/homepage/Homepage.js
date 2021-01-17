import React from 'react';
import 'antd/dist/antd.css';
import './homepage.css';
import { Layout, Menu, Breadcrumb, Row, Col, Divider, Button, Empty, Card } from 'antd';
import ImageWrapper from './ImageWrapper';
import Particles from 'react-particles-js';
import { particles } from './particles';
import { CalendarOutlined, CodeOutlined, PlusOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const style = { background: '#DDDDD' };
const style2 = { background: 'red', padding: '20px' };

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Layout className='layout'>
          <Header className='header'>
            <div className='logo'>
              <Button type='primary' shape={'round'} icon={<PlusOutlined />} />
            </div>
            <Menu mode='horizontal' defaultSelectedKeys={['2']}>
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Row gutter={0} style={style}>
              <Col className='gutter-row' span={24}>
                <div className='title-holder'>
                  <div className='title'>
                    <h1>DevPad.</h1>
                  </div>
                  <Particles id='ts-particles' params={particles} />
                </div>
              </Col>
            </Row>
            <div>
              <Row>
                <Col span={24}>
                  <Card>
                    <Button className='add-btn' shape={'round'} icon={<PlusOutlined />} />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card>
                    <p>
                      <span>
                        <CodeOutlined />
                      </span>
                      Java
                    </p>
                    <p>
                      <span>
                        <CalendarOutlined />
                      </span>
                      2019-01-01
                    </p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
  }
}

export default Homepage;
