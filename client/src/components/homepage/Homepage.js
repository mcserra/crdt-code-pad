import React from 'react';
import 'antd/dist/antd.css';
import './homepage.css'
import { Layout, Menu, Breadcrumb, Row, Col, Divider  } from 'antd';
import ImageWrapper from "./ImageWrapper";

const { Header, Content, Footer } = Layout;

const style = {background: '#ff4a4a'};


class Homepage extends React.Component {


    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header className="header">
                        <div className="logo" />
                        <Menu style={{background: "#DDDDDD"}} mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <Row gutter={0} style={style}>
                            <Col className="gutter-row" span={18}>
                                <div style={style}>
                                    <div className="title">
                                        <h1>DevPad.</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div style={style}>
                                    <ImageWrapper/>
                                </div>
                            </Col>
                        </Row>
                        <div className="site-layout-content">Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}

export default Homepage;
